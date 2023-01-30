const mongoose = require("mongoose");
const User = mongoose.model("User");

module.exports = (req, res) => {
  User.findByIdAndUpdate(
    req.body.unfollowId,
    {
      $pull: { followers: req.user._id },
    },
    { new: true },
    (err, result1) => {
      if (err) {
        return res.ststus(422).json({ error: err });
      }
      User.findByIdAndUpdate(
        req.user._id,
        {
          $pull: { following: req.body.unfollowId },
        },
        { new: true }
      )
        .then((result2) => {
          res.json({ result1, result2 });
        })
        .catch((err) => {
          return res.ststus(422).json({ error: err });
        });
    }
  );
};
