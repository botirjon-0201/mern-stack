const mongoose = require("mongoose");
const User = mongoose.model("User");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../keys");

module.exports = (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(401).json({ error: "You must be logged in" });
  } else {
    const token = authorization;
    jwt.verify(token, JWT_SECRET, async (error, payload) => {
      try {
        const { _id } = payload;
        const userData = await User.findById(_id);
        req.user = userData;
        next();
      } catch (error) {
        return res.status(401).json({ error: "You must be logged in" });
      }
    });
  }
};
