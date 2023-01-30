const mongoose = require("mongoose");
const Post = mongoose.model("Post");

module.exports = (req, res) => {
  const comment = {
    text: req.body.text,
    postedBy: req.user.id,
  };
  
  Post.findByIdAndUpdate(
    req.body.postId,
    {
      $push: { comments: comment },
    },
    { new: true }
  )
    .populate("comments.postedBy", "_id name")
    .exec((err, result) => {
      if (err) {
        return res.status(422).json({ error: err });
      } else {
        console.log(result.comments[0].postedBy)
        res.json(result);
      }
    });
};
