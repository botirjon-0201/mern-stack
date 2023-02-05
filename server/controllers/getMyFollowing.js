const mongoose = require("mongoose");
const Post = mongoose.model("Post");

module.exports = async (req, res) => {
  try {
    const posts = await Post.find({ postedBy: { $in: req.user.following } })
      .populate("postedBy", "_id name")
      .populate("comments.commentBy", "_id name");
    res.json(posts);
  } catch (error) {
    console.log(error);
  }
};
