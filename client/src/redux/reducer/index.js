import { combineReducers } from "@reduxjs/toolkit";
import user from "./userSlice";
import reg from "./regSlice";
import log from "./logSlice";
import post from "./postSlice";

export default combineReducers({
  user,
  reg,
  log,
  post,
});
