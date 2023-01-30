const router = require("express").Router();
const { loginMiddleware } = require("../middlewares");
const {
  getUserController,
  followUserController,
  unfollowUserController,
} = require("../controllers");

router.get("/user/:id", loginMiddleware, getUserController);
router.put("/follow", loginMiddleware, followUserController);
router.put("/unfollow", loginMiddleware, unfollowUserController);

module.exports = router;
