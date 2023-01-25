import { combineReducers } from "@reduxjs/toolkit";
import user from "./userSlice";
import reg from "./regSlice";
import log from "./logSlice";
import home from "./homeSlice";
import post from "./postSlice";
import profile from "./profileSlice";

export default combineReducers({
  user,
  reg,
  log,
  home,
  post,
  profile,
});
