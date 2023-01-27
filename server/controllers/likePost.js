const mongoose = require("mongoose");
const Post = mongoose.model("Post");

module.exports = (req, res) => {
  Post.find({ _id: req.body.postId })
    .then((post) => {
      if (post[0].likes.includes(req.user._id)) {
        Post.findByIdAndUpdate(
          req.body.postId,
          {
            $pull: { likes: req.user._id },
          },
          { new: true }
        ).exec((err, result) => {
          if (err) {
            return res.status(422).json({ error: err });
          } else {
            res.json(result);
          }
        });
      } else {
        if (post[0].dislikes.includes(req.user._id)) {
          Post.findByIdAndUpdate(
            req.body.postId,
            {
              $pull: { dislikes: req.user._id },
            },
            { new: true }
          ).exec((err, result) => {
            if (err) {
              return res.status(422).json({ error: err });
            } else {
              res.json(result);
            }
          });
        }
        Post.findByIdAndUpdate(
          req.body.postId,
          {
            $push: { likes: req.user._id },
          },
          { new: true }
        ).exec((err, result) => {
          if (err) {
            return res.status(422).json({ error: err });
          } else {
            res.json(result);
          }
        });
      }
    })
    .catch((err) => {
      console.log(err);
    });
};
