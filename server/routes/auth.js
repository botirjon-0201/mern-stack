const router = require("express").Router();
const signupController = require("../controllers/signup");
const signinController = require("../controllers/signin");
const loginMiddleware = require("../middlewares/login");

router.get("/protected", loginMiddleware, (req, res) => {
  res.send("Hello world");
});

router.post("/signup", signupController);
router.post("/signin", signinController);

module.exports = router;
