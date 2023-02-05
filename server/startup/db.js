const mongoose = require("mongoose");
const config = require("config");
const { MONGO_URI } = require("../keys");

module.exports = () => {
  mongoose.set("strictQuery", false);
  mongoose
    .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Connected to MongDB.."))
    .catch((err) => console.error("Error connecting to MongDB...", err));
};
