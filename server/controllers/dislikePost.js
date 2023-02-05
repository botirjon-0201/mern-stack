const mongoose = require("mongoose");
const Post = mongoose.model("Post");

module.exports = async (req, res) => {
  try {
    const post = await Post.findById(req.body.postId);
    if (post.dislikes.includes(req.user._id)) {
      Post.findByIdAndUpdate(
        req.body.postId,
        {
          $pull: { dislikes: req.user._id },
        },
        { new: true }
      )
        .populate("postedBy", "_id name")
        .populate("comments.commentBy", "_id name")
        .exec((error, result) => {
          if (error) {
            return res.status(404).json({ error });
          } else {
            res.json(result);
          }
        });
    } else {
      if (post.likes.includes(req.user._id)) {
        Post.findByIdAndUpdate(
          req.body.postId,
          {
            $pull: { likes: req.user._id },
            $push: { dislikes: req.user._id },
          },
          { new: true }
        )
          .populate("postedBy", "_id name")
          .populate("comments.commentBy", "_id name")
          .exec((error, result) => {
            if (error) {
              return res.status(404).json({ error });
            } else {
              res.json(result);
            }
          });
      } else {
        Post.findByIdAndUpdate(
          req.body.postId,
          {
            $push: { dislikes: req.user._id },
          },
          { new: true }
        )
          .populate("postedBy", "_id name")
          .populate("comments.commentBy", "_id name")
          .exec((error, result) => {
            if (error) {
              return res.status(404).json({ error });
            } else {
              res.json(result);
            }
          });
      }
    }
  } catch (error) {
    console.log(err);
  }
};
