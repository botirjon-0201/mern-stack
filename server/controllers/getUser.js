const mongoose = require("mongoose");
const Post = mongoose.model("Post");
const User = mongoose.model("User");

module.exports = (req, res) => {
  User.findOne({ _id: req.params.id })
    .then((user) => {
      Post.find({ postedBy: req.params.id })
        .populate("postedBy", "_id name")
        .exec((err, posts) => {
          if (err) {
            return res.status(422).json({ error: err });
          }
          res.json({ user, posts });
        });
    })
    .catch((err) => {
      return res.status(404).json({ error: "User not found" });
    });
};
