const mongoose = require("mongoose");
const Post = mongoose.model("Post");

module.exports = async (req, res) => {
  try {
    const { title, body, photo } = req.body;
    const newPost = new Post({
      title,
      body,
      photo,
      postedBy: req.user._id,
    });
    await newPost.save();
    res.json(newPost);
  } catch (error) {
    console.log(error);
  }
};
