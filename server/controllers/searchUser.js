const mongoose = require("mongoose");
const User = mongoose.model("User");

module.exports = (req, res) => {
  const userSearchPanel = new RegExp("^" + req.body.query);
  User.find({ name: { $regex: userSearchPanel } })
    .select("_id name email photo")
    .then((user) => res.json(user))
    .catch((err) => console.log(err));
};
