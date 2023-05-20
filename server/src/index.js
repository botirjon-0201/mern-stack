const express = require("express");
const { config } = require("./config/dotenv");
const app = express();
require("./start/routes")(app);
require("./start/db")();

const PORT = config.server.port() || 5555;
app.listen(PORT, () => {
  console.log(`Server has been started on port ${PORT}...`);
});
