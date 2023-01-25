import { combineReducers } from "@reduxjs/toolkit";
import user from "./userSlice";
import reg from "./regSlice";
import log from "./logSlice";
import home from "./homeSlice";
import { setUser, setClicked } from "./userSlice";
import { setRegName, setRegEmail, setRegPassword } from "./regSlice";
import { setLogEmail, setLogPassword } from "./logSlice";
import { setData } from "./homeSlice";

export default combineReducers({
  user,
  reg,
  log,
  home,
});

export {
  setUser,
  setClicked,
  setRegName,
  setRegEmail,
  setRegPassword,
  setLogEmail,
  setLogPassword,
  setData,
};
