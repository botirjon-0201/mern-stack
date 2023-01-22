const mongoose = require("mongoose");
const User = mongoose.model("User");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../keys");

module.exports = (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) {
    res.status(401).json({ error: "You must be logged in 1" });
  } else {
    const token = authorization.replace("Sammi ", "");
    jwt.verify(token, JWT_SECRET, (err, payload) => {
      if (err) {
        return res.status(401).json({ error: "You must be logged in 2" });
      } else {
        const { _id } = payload;
        User.findById(_id).then((userData) => {
          req.user = userData;
        });
        next();
      }
    });
  }
};
