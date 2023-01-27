import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  posts: [],
  showComments: false,
};

export const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {
    setPosts(state, action) {
      state.posts = action.payload;
    },
    setShowComments(state, action) {
      state.showComments = action.payload;
    },
  },
});

export const { setPosts, setShowComments } = homeSlice.actions;
export default homeSlice.reducer;
