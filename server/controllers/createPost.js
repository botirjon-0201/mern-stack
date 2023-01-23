const mongoose = require("mongoose");
const Post = mongoose.model("Post");

module.exports = (req, res) => {
  const { title, body } = req.body;
  if (!title || !body) {
    return res.status(422).json({ error: "Please, add all the fields" });
  }
  const post = new Post({
    title,
    body,
    postedBy: req.user,
  });
  post
    .save()
    .then((post) => res.json({ post }))
    .catch((err) => console.log(err));
};
