const signupController = require("./signup");
const signinController = require("./signin");
const createPostController = require("./createPost");
const getAllPostsController = require("./getAllPosts");
const getMyPostsController = require("./getMyPosts");
const likePostController = require("./likePost");
const dislikePostController = require("./dislikePost");
const commentPostController = require("./commentPost");

module.exports = {
  signupController,
  signinController,
  createPostController,
  getAllPostsController,
  getMyPostsController,
  likePostController,
  dislikePostController,
  commentPostController,
};
