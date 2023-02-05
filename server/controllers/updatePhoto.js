const mongoose = require("mongoose");
const User = mongoose.model("User");

module.exports = (req, res) => {
  User.findByIdAndUpdate(
    req.user._id,
    { $set: { photo: req.body.photo } },
    { new: true },
    (error, result) => {
      if (error) {
        return res.status(404).json({ err: "Photo can not posted" });
      }
      res.json(result);
    }
  );
};
