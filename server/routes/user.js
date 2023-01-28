const router = require("express").Router();
const { getUserController } = require("../controllers");
const { loginMiddleware } = require("../middlewares");

router.get("/user/:id", loginMiddleware, getUserController);

module.exports = router;
