import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  title: "",
  body: "",
  url: "https://res.cloudinary.com/dzafzrmxl/image/upload/v1675005677/User-avatar.svg_eivvxo.png",
  posts: [],
  myPosts: [],
  showComments: false,
};

export const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    setTitle(state, action) {
      state.title = action.payload;
    },
    setBody(state, action) {
      state.body = action.payload;
    },
    setUrl(state, action) {
      state.url = action.payload;
    },
    setPosts(state, action) {
      state.posts = action.payload;
    },
    setMyPosts(state, action) {
      state.myPosts = action.payload;
    },
    setShowComments(state, action) {
      state.showComments = action.payload;
    },
  },
});

export const {
  setTitle,
  setBody,
  setUrl,
  setPosts,
  setMyPosts,
  setShowComments,
} = postSlice.actions;
export default postSlice.reducer;
