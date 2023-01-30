const mongoose = require("mongoose");
const Post = mongoose.model("Post");

module.exports = (req, res) => {
  Post.findByIdAndDelete(req.params.postId, (err, post) => {
    if (err) {
      res.status(422).json({ error: err });
    } else {
      res.json(post);
    }
  });
};
