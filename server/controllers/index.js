const signupController = require("./signup");
const signinController = require("./signin");
const createPostController = require("./createPost");
const getAllPostsController = require("./getAllPosts");
const getMyPostsController = require("./getMyPosts");
const likePostController = require("./likePost");
const dislikePostController = require("./dislikePost");
const commentPostController = require("./commentPost");
const deletePostController = require("./deletePost");
const getUserController = require("./getUser");
const followUserController = require("./followUser");
const unfollowUserController = require("./unfollowUser");
const getMyFollowingController = require("./getMyFollowing");
const getMyFollowersController = require("./getMyFollowers");

module.exports = {
  signupController,
  signinController,
  createPostController,
  getAllPostsController,
  getMyPostsController,
  likePostController,
  dislikePostController,
  commentPostController,
  deletePostController,
  getUserController,
  followUserController,
  unfollowUserController,
  getMyFollowingController,
  getMyFollowersController,
};
