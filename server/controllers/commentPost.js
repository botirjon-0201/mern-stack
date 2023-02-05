const mongoose = require("mongoose");
const Post = mongoose.model("Post");

module.exports = async (req, res) => {
  try {
    const comment = {
      text: req.body.text,
      commentBy: req.user.id,
    };

    const post = await Post.findByIdAndUpdate(
      req.body.postId,
      { $push: { comments: comment } },
      { new: true }
    )
      .populate("postedBy", "_id name")
      .populate("comments.commentBy", "_id name");

    post.exec((error, result) => {
      if (error) {
        return res.status(404).json({ error });
      } else {
        res.json(result);
      }
    });
  } catch (error) {
    console.log(error);
  }
};
