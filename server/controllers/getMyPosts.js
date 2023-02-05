const mongoose = require("mongoose");
const Post = mongoose.model("Post");

module.exports = async (req, res) => {
  try {
    const myPosts = await Post.find({ postedBy: { _id: req.user._id } })
      .populate("postedBy", "_id, name")
      .populate("comments.commentBy", "_id name");
    res.json(myPosts);
  } catch (error) {
    console.log(error);
  }
};
