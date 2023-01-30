const mongoose = require("mongoose");
const User = mongoose.model("User");

module.exports = (req, res) => {
  User.findByIdAndUpdate(
    req.body.followId,
    {
      $push: { followers: req.user._id },
    },
    { new: true },
    (err, result1) => {
      if (err) {
        return res.ststus(422).json({ error: err });
      }
      User.findByIdAndUpdate(
        req.user._id,
        {
          $push: { following: req.body.followId },
        },
        { new: true }
      )
        .select("-password")
        .then((result2) => {
          res.json({ result1, result2 });
        })
        .catch((err) => {
          return res.ststus(422).json({ error: err });
        });
    }
  );
};
