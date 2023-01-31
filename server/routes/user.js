const router = require("express").Router();
const { loginMiddleware } = require("../middlewares");
const {
  getUserController,
  followUserController,
  unfollowUserController,
  updatePhotoController,
  editProfileController,
} = require("../controllers");

router.get("/user/:id", loginMiddleware, getUserController);
router.put("/follow", loginMiddleware, followUserController);
router.put("/unfollow", loginMiddleware, unfollowUserController);
router.put("/updatephoto", loginMiddleware, updatePhotoController);
router.put("/editprofile", loginMiddleware, editProfileController);

module.exports = router;
