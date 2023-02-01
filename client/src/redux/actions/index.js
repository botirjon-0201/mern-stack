import {
  setUser,
  setProfile,
  setClicked,
  setFollow,
  setIsEdit,
  setMyName,
  setSearch,
  setFindUsers,
} from "../reducer/userSlice";
import { setRegName, setRegEmail, setRegPassword } from "../reducer/regSlice";
import { setLogEmail, setLogPassword } from "../reducer/logSlice";
import {
  setTitle,
  setBody,
  setUrl,
  setPosts,
  setMyPosts,
  setShowComments,
} from "../reducer/postSlice";
import { signUp } from "./signup";
import { signIn } from "./signin";
import { likePost } from "./likePost";
import { dislikePost } from "./dislikePost";
import { commentPost } from "./commentPost";
import { deletePost } from "./deletePost";
import { followUser } from "./followUser";
import { unfollowUser } from "./unfollowUser";
import { uploadPhoto } from "./uploadPhoto";
import { editProfilePhoto } from "./editProfilePhoto";
import { editProfile } from "./editProfile";
import { searchUser } from "./searchUser";

export {
  setUser,
  setProfile,
  setClicked,
  setFollow,
  setRegName,
  setRegEmail,
  setRegPassword,
  setLogEmail,
  setLogPassword,
  setTitle,
  setBody,
  setUrl,
  setPosts,
  setMyPosts,
  signUp,
  signIn,
  likePost,
  dislikePost,
  commentPost,
  setShowComments,
  deletePost,
  followUser,
  unfollowUser,
  uploadPhoto,
  editProfilePhoto,
  setIsEdit,
  setMyName,
  editProfile,
  setSearch,
  searchUser,
  setFindUsers,
};
