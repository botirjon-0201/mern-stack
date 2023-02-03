const mongoose = require("mongoose");
const Post = mongoose.model("Post");

module.exports = (req, res) => {
  Post.findById(req.body.postId)
    .then((post) => {
      if (post.likes.includes(req.user._id)) {
        Post.findByIdAndUpdate(
          req.body.postId,
          {
            $pull: { likes: req.user._id },
          },
          { new: true }
        )
          .populate("postedBy", "_id name")
          .populate("comments.commentBy", "_id name")
          .exec((err, result) => {
            if (err) {
              return res.status(422).json({ error: err });
            } else {
              res.json(result);
            }
          });
      } else {
        if (post.dislikes.includes(req.user._id)) {
          Post.findByIdAndUpdate(
            req.body.postId,
            {
              $pull: { dislikes: req.user._id },
              $push: { likes: req.user._id },
            },
            { new: true }
          )
            .populate("postedBy", "_id name")
            .populate("comments.commentBy", "_id name")
            .exec((err, result) => {
              if (err) {
                return res.status(422).json({ error: err });
              } else {
                res.json(result);
              }
            });
        } else {
          Post.findByIdAndUpdate(
            req.body.postId,
            {
              $push: { likes: req.user._id },
            },
            { new: true }
          )
            .populate("postedBy", "_id name")
            .populate("comments.commentBy", "_id name")
            .exec((err, result) => {
              if (err) {
                return res.status(422).json({ error: err });
              } else {
                res.json(result);
              }
            });
        }
      }
    })
    .catch((err) => {
      console.log(err);
    });
};
