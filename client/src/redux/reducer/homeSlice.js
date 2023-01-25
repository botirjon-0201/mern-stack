import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  posts: [],
};

export const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {
    setPosts(state, action) {
      state.posts = action.payload;
    },
  },
});

export const { setPosts } = homeSlice.actions;
export default homeSlice.reducer;
