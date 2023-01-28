const mongoose = require("mongoose");
const Post = mongoose.model("Post");
const User = mongoose.model("User");
const ObjectId = require("mongodb").ObjectId;

module.exports = (req, res) => {
  User.findById(req.params.id)
    .select("-password")
    .then((user) => {
      const userId = new ObjectId(req.params.id);
      Post.find;
      Post.find({
        postedBy: { _id: userId, name: user.name },
      })
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
