const mongoose = require("mongoose");
const User = mongoose.model("User");
const { validate } = require("../validations/validateUser");
const bcrypt = require("bcryptjs");

module.exports = async (req, res) => {
  try {
    const { error } = validate(req.body);
    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    } else {
      const { name, email, password, photo } = req.body;
      const savedUser = await User.findOne({ email });
      if (savedUser) {
        return res
          .status(400)
          .json({ error: "Already was signed up with that email" });
      } else {
        // const salt = bcrypt.genSalt(); // Ustozdan so'rash kerak
        const hashedPass = await bcrypt.hash(password, 10);
        const user = new User({
          name,
          email,
          password: hashedPass,
          photo,
        });
        await user.save();
        res.json({ msg: "You have signed up successfully!" });
      }
    }
  } catch (error) {
    console.log(error);
  }
};
