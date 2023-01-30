import {
  setUser,
  setProfile,
  setClicked,
  setFollow,
} from "../reducer/userSlice";
import {
  setRegName,
  setRegEmail,
  setRegPassword,
  setIsOpenModal,
} from "../reducer/regSlice";
import { setLogEmail, setLogPassword } from "../reducer/logSlice";
import {
  setTitle,
  setBody,
  setUrl,
  setPosts,
  setMyPosts,
  setShowComments,
} from "../reducer/postSlice";
import { regData } from "./regData";
import { logData } from "./logData";
import { postDetails } from "./postDetails";
import { likePost } from "./likePost";
import { dislikePost } from "./dislikePost";
import { commentPost } from "./commentPost";
import { deletePost } from "./deletePost";
import { followUser } from "./followUser";
import { unfollowUser } from "./unfollowUser";
import { uploadPhoto } from "./uploadPhoto";

export {
  setUser,
  setProfile,
  setClicked,
  setFollow,
  setRegName,
  setRegEmail,
  setRegPassword,
  setIsOpenModal,
  setLogEmail,
  setLogPassword,
  setTitle,
  setBody,
  setUrl,
  setPosts,
  setMyPosts,
  regData,
  logData,
  postDetails,
  likePost,
  dislikePost,
  commentPost,
  setShowComments,
  deletePost,
  followUser,
  unfollowUser,
  uploadPhoto,
};
