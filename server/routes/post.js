const router = require("express").Router();
const loginMiddleware = require("../middlewares/login");
const createPostController = require("../controllers/createPost");
const getAllPostsController = require("../controllers/getAllPosts");
const getMyPostsController = require("../controllers/getMyPosts");

router.get("/allposts", loginMiddleware, getAllPostsController);
router.post("/createpost", loginMiddleware,  createPostController);
router.get("/myposts", loginMiddleware, getMyPostsController);

module.exports = router;
