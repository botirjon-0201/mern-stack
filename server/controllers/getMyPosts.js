const mongoose = require("mongoose");
const Post = mongoose.model("Post");

module.exports = (req, res) => {
  Post.find({ postedBy: { _id: req.user._id } })
    .populate("postedBy", "_id, name")
    .populate("comments.commentBy", "_id name")
    .then((myPosts) => {
      res.json(myPosts);
    })
    .catch((err) => {
      console.log(err);
    });
};
