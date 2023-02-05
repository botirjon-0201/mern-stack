const mongoose = require("mongoose");
const User = mongoose.model("User");

module.exports = (req, res) => {
  try {
    User.findByIdAndUpdate(
      req.body.followId,
      {
        $push: { followers: req.user._id },
      },
      { new: true },
      (error, result1) => {
        if (error) {
          return res.status(404).json({ error });
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
          });
      }
    );
  } catch (error) {
    return res.status(404).json({ error });
  }
};
