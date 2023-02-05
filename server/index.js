const express = require("express");
const app = express();

require("./models/user"); // shu yerda kerakmi?
require("./models/post");
require("./startup/routes")(app);
require("./startup/db")();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server has been started on port ${PORT}...`);
});
