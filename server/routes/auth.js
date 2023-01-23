const router = require("express").Router();
const signupController = require("../controllers/signup");
const signinController = require("../controllers/signin");

router.post("/signup", signupController);
router.post("/signin", signinController);

module.exports = router;
