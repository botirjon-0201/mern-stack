const mongoose = require("mongoose");
const User = mongoose.model("User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { config } = require("../config/dotenv");

const validateUser = require("../validations/validateUser");
const validateAuth = require("../validations/validateAuth");

const signup = async (req, res) => {
  try {
    const { error } = validateUser(req.body);
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
    console.log(error); // ko'rish kerak
  }
};

const signin = async (req, res) => {
  try {
    const { error } = validateAuth(req.body);
    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    } else {
      const { email, password } = req.body;
      const savedUser = await User.findOne({ email });
      if (!savedUser) {
        return res.status(400).json({ error: "Invalid email" });
      } else {
        const matchPassword = await bcrypt.compare(
          password,
          savedUser.password
        );
        if (!matchPassword) {
          return res.status(400).json({ error: "Invalid password" });
        } else {
          // const token = savedUser.generateToken()  // Ustozdan so'rash kerak
          const token = jwt.sign(
            { _id: savedUser._id },
            config.server.jwtSecret()
          );
          const { _id, name, email, photo, followers, following } = savedUser;
          res.json({
            token: token,
            user: { _id, name, email, photo, followers, following },
            msg: "You have signed in successfully!",
          });
        }
      }
    }
  } catch (error) {
    console.log(error); // ko'rish kerak
  }
};

module.exports = { signup, signin };
