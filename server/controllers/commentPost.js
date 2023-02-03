const mongoose = require("mongoose");
const Post = mongoose.model("Post");

module.exports = (req, res) => {
  const comment = {
    text: req.body.text,
    commentBy: req.user.id,
  };

  Post.findByIdAndUpdate(
    req.body.postId,
    {
      $push: { comments: comment },
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
};
