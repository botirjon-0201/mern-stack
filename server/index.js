const express = require("express");
const app = express();
const mongoose = require("mongoose");
const PORT = process.env.PORT || 5000;
const { MONGO_URI } = require("./keys");

require("./models/user");
require("./models/post");

app.use(express.json());
app.use(require("./routes/auth"));
app.use(require("./routes/post"));
app.use(require("./routes/user"));

mongoose.set("strictQuery", false);
mongoose.connect(MONGO_URI);

app.listen(PORT, () => {
  console.log(`Server has been started on port ${PORT}...`);
});
