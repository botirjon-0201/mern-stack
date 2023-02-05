const router = require("express").Router();
const { loginMiddleware } = require("../middlewares");
const {
  getUser,
  followUser,
  unfollowUser,
  updatePhoto,
  updateProfile,
  searchUser,
} = require("../controllers/user.controller");

router.get("/user/:id", loginMiddleware, getUser);
router.put("/follow", loginMiddleware, followUser);
router.put("/unfollow", loginMiddleware, unfollowUser);
router.put("/updatephoto", loginMiddleware, updatePhoto);
router.put("/editprofile", loginMiddleware, updateProfile);
router.post("/searchuser", searchUser);

module.exports = router;
