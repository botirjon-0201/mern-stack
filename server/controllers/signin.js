const mongoose = require("mongoose");
const User = mongoose.model("User");
const { validate } = require("../validations/validateAuth");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../keys");

module.exports = async (req, res) => {
  const { error } = validate(req.body);
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  } else {
    const { email, password } = req.body;
    const savedUser = await User.findOne({ email });
    if (!savedUser) {
      return res.status(400).json({ error: "Invalid email" });
    } else {
      const matchPassword = await bcrypt.compare(password, savedUser.password);
      if (!matchPassword) {
        return res.status(400).json({ error: "Invalid password" });
      } else {
        const token = jwt.sign({ _id: savedUser._id }, JWT_SECRET);
        const { _id, name, email, photo, followers, following } = savedUser;
        res.json({
          token,
          user: { _id, name, email, photo, followers, following },
          msg: "You have signed in successfully!",
        });
      }
    }
  }
};
