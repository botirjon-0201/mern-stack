import { setUser, setClicked } from "../reducer/userSlice";
import { setRegName, setRegEmail, setRegPassword } from "../reducer/regSlice";
import { setLogEmail, setLogPassword } from "../reducer/logSlice";
import { setPosts } from "../reducer/homeSlice";
import { setTitle, setBody, setUrl } from "../reducer/postSlice";
import { setMyPosts } from "../reducer/profileSlice";
import { regData } from "./regData";
import { logData } from "./logData";
import { postDetails } from "./postDetails";

export {
  setUser,
  setClicked,
  setRegName,
  setRegEmail,
  setRegPassword,
  setLogEmail,
  setLogPassword,
  setPosts,
  setTitle,
  setBody,
  setUrl,
  setMyPosts,
  regData,
  logData,
  postDetails,
};
