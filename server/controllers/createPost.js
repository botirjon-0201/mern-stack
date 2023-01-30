const mongoose = require("mongoose");
const Post = mongoose.model("Post");

module.exports = (req, res) => {
  const { title, body, photo } = req.body;
  if (!title || !body || !photo) {
    return res.status(422).json({ error: "Please, add all the fields" });
  }
  const post = new Post({
    title,
    body,
    photo,
    postedBy: req.user._id,
  });
  post
    .save()
    .then((post) => res.json({ post }))
    .catch((err) => console.log(err));
};
