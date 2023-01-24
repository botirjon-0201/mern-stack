const mongoose = require("mongoose");
const User = mongoose.model("User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../keys");

module.exports = (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(422).json({ error: "Please add email or password" });
  } else {
    User.findOne({ email })
      .then((savedUser) => {
        if (savedUser) {
          bcrypt.compare(password, savedUser.password).then((doMatch) => {
            if (doMatch) {
              //   res.json({ msg: "Successfully signed in" });
              const token = jwt.sign({ _id: savedUser._id }, JWT_SECRET);
              const { _id, name, email } = savedUser;
              res.json({ token, user: { _id, name, email } });
            } else {
              res.status(422).json({ error: "Invalid password" });
            }
          });
        } else {
          res.status(422).json({ error: "Invalid email" });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }
};
