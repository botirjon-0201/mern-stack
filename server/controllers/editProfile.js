const mongoose = require("mongoose");
const User = mongoose.model("User");

module.exports = (req, res) => {
  User.findByIdAndUpdate(
    req.user._id,
    { $set: { name: req.body.myName } },
    { new: true },
    (err, result) => {
      if (err) {
        return res.status(422).json({ err: "Photo can not posted" });
      }
      res.json(result);
    }
  );
};