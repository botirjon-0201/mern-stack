const mongoose = require("mongoose");
const Post = mongoose.model("Post");

module.exports = async (req, res) => {
  try {
    await Post.findByIdAndDelete(req.params.postId, (error, post) => {
      if (error) {
        return res.status(404).json({ error });
      } else {
        res.json(post);
      }
    });
  } catch (error) {
    console.log(error);
  }
};
