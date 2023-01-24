const mongoose = require("mongoose");
const User = mongoose.model("User");
const bcrypt = require("bcryptjs");

module.exports = (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    res.status(422).json({ error: "Please, add all the fields" });
  } else {
    User.findOne({ email }).then((savedUser) => {
      if (savedUser) {
        return res
          .status(422)
          .json({ error: "Already was signed up with that email" });
      } else {
        bcrypt.hash(password, 10).then((hashedPass) => {
          const user = new User({ name, email, password: hashedPass });
          user
            .save()
            .then((user) => {
              res.json({ msg: "You have signed up successfully!" });
            })
            .catch((err) => {
              console.log(err);
            });
        });
      }
    });
  }
};
