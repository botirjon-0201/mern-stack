const mongoose = require("mongoose");
const Post = mongoose.model("Post");

module.exports = (req, res) => {
  const attitude = {
    clickBy: {
      _id: req.user._id,
      name: req.user.name,
    },
  };
  Post.find({ _id: req.body.postId })
    .then((post) => {
      const indexDislike = post[0].dislikes.findIndex(
        (item) => item.clickBy._id.toString() === req.user._id.toString()
      );
      if (indexDislike >= 0) {
        Post.findByIdAndUpdate(
          req.body.postId,
          {
            $pull: { dislikes: attitude },
          },
          { new: true }
        ).exec((err, result) => {
          if (err) {
            return res.status(422).json({ error: err });
          } else {
            res.json(result);
          }
        });
      } else {
        const indexLike = post[0].likes.findIndex(
          (item) => item.clickBy._id.toString() === req.user._id.toString()
        );
        if (indexLike >= 0) {
          Post.findByIdAndUpdate(
            req.body.postId,
            {
              $pull: { likes: attitude },
              $push: { dislikes: attitude },
            },
            { new: true }
          ).exec((err, result) => {
            if (err) {
              return res.status(422).json({ error: err });
            } else {
              res.json(result);
            }
          });
        } else {
          Post.findByIdAndUpdate(
            req.body.postId,
            {
              $push: { dislikes: attitude },
            },
            { new: true }
          ).exec((err, result) => {
            if (err) {
              return res.status(422).json({ error: err });
            } else {
              res.json(result);
            }
          });
        }
      }
    })
    .catch((err) => {
      console.log(err);
    });
};