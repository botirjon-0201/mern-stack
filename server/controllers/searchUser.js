const mongoose = require("mongoose");
const User = mongoose.model("User");

module.exports = async (req, res) => {
  try {
    const userSearchPanel = new RegExp("^" + req.body.query);
    const user = await User.find({ name: { $regex: userSearchPanel } }).select(
      "_id name email photo"
    );
    res.json(user);
  } catch (error) {
    console.log(err);
  }
};
