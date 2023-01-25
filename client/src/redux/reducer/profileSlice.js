import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  myPosts: [],
};

export const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    setMyPosts(state, action) {
      state.myPosts = action.payload;
    },
  },
});

export const { setMyPosts } = profileSlice.actions;
export default profileSlice.reducer;
