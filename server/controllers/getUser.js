const mongoose = require("mongoose");
const Post = mongoose.model("Post");
const User = mongoose.model("User");

module.exports = async (req, res) => {
  try {
    const user = await User.findById(req.params.id).select("-password");
    Post.find({
      postedBy: { _id: req.params.id },
    })
      .populate("postedBy", "_id name")
      .exec((error, posts) => {
        if (error) {
          return res.status(404).json({ error });
        }
        res.json({ user, posts });
      });
  } catch (error) {
    return res.status(404).json({ error: "User not found" });
  }
};
