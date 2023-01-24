import { combineReducers } from "@reduxjs/toolkit";
import user from "./userSlice";
import reg from "./regSlice";
import log from "./logSlice";
import { setUser, setClicked } from "./userSlice";
import { setRegName, setRegEmail, setRegPassword } from "./regSlice";
import { setLogEmail, setLogPassword } from "./logSlice";

export default combineReducers({
  user,
  reg,
  log,
});

export {
  setUser,
  setClicked,
  setRegName,
  setRegEmail,
  setRegPassword,
  setLogEmail,
  setLogPassword,
};
