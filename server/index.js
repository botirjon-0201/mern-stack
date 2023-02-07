const express = require("express");
const { config } = require("./config/dotenv");
const app = express();
require("./models/user"); // shu yerda kerakmi?
require("./models/post");
require("./startup/routes")(app);
require("./startup/db")();

const PORT = config.server.port() || 5000;
app.listen(PORT, () => {
  console.log(`Server has been started on port ${PORT}...`);
});
