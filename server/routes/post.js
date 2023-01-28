const router = require("express").Router();
const { loginMiddleware } = require("../middlewares");
const {
  getAllPostsController,
  createPostController,
  getMyPostsController,
  likePostController,
  dislikePostController,
  commentPostController,
  deletePostController,
} = require("../controllers");

router.get("/allposts", loginMiddleware, getAllPostsController);
router.post("/createpost", loginMiddleware, createPostController);
router.get("/myposts", loginMiddleware, getMyPostsController);
router.put("/like", loginMiddleware, likePostController);
router.put("/dislike", loginMiddleware, dislikePostController);
router.put("/comments", loginMiddleware, commentPostController);
router.delete("/deletepost/:postId", loginMiddleware, deletePostController);

module.exports = router;
