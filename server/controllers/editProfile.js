const mongoose = require("mongoose");
const User = mongoose.model("User");

module.exports = async (req, res) => {
  try {
    await User.findByIdAndUpdate(
      req.user._id,
      { $set: { name: req.body.myName } },
      { new: true },
      (error, result) => {
        if (error) {
          return res.status(404).json({ error: "Profile can not updated" });
        } else {
          res.json(result);
        }
      }
    );
  } catch (error) {
    console.log(error);
  }
};
