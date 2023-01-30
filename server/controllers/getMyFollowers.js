const mongoose = require("mongoose");
const Post = mongoose.model("Post");

module.exports = (req, res) => {
  Post.find({ postedBy: { $in: req.user.followers } })
    .populate("postedBy", "_id name")
    .populate("comments.postedBy", "_id name")
    .then((posts) => {
      res.json(posts);
    })
    .catch((err) => console.log(err));
};
