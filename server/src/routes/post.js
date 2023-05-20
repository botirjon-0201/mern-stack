const router = require("express").Router();
const { loginMiddleware } = require("../middlewares");
const {
  getAllPosts,
  createPost,
  getMyPosts,
  likePost,
  dislikePost,
  commentPost,
  deletePost,
  getMyFollowing,
  getMyFollowers,
} = require("../controllers/post.controller");

router.get("/allposts", loginMiddleware, getAllPosts);
router.post("/createpost", loginMiddleware, createPost);
router.get("/myposts", loginMiddleware, getMyPosts);
router.put("/like", loginMiddleware, likePost);
router.put("/dislike", loginMiddleware, dislikePost);
router.put("/comments", loginMiddleware, commentPost);
router.delete("/deletepost/:postId", loginMiddleware, deletePost);
router.get("/myfollowing", loginMiddleware, getMyFollowing);
router.get("/myfollowers", loginMiddleware, getMyFollowers);

module.exports = router;
