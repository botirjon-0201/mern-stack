const express = require("express");
const mongoose = require("mongoose");
const { MONGO_URI } = require("./keys");
const app = express();
const PORT = process.env.PORT || 5000;

require("./models/user");
require("./models/post");

app.use(express.json());
app.use(require("./routes/auth"));
app.use(require("./routes/post"));
app.use(require("./routes/user"));

mongoose.set("strictQuery", false);
mongoose
  .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongDB.."))
  .catch((err) => console.error("Error connecting to MongDB...", err));

app.listen(PORT, () => {
  console.log(`Server has been started on port ${PORT}...`);
});
