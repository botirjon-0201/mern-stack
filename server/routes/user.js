const router = require("express").Router();
const { getUserController } = require("../controllers");


router.get("/user/:id", getUserController);

module.exports = router;
