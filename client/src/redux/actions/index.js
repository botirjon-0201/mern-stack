import { setUser, setClicked } from "../reducer/userSlice";
import { setRegName, setRegEmail, setRegPassword } from "../reducer/regSlice";
import { setLogEmail, setLogPassword } from "../reducer/logSlice";
import { setData } from "../reducer/homeSlice";
import { setTitle, setBody, setUrl } from "../reducer/postSlice";
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
  setData,
  setTitle,
  setBody,
  setUrl,
  regData,
  logData,
  postDetails,
};
