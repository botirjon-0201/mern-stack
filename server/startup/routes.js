const express = require("express");

module.exports = (app) => {
  app.use(express.json());
  app.use(require("../routes/auth"));
  app.use(require("../routes/post"));
  app.use(require("../routes/user"));
  app.use(require("../middlewares/error"));
};
