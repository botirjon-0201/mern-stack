import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  title: "",
  body: "",
  url: "",
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
  },
});

export const { setTitle, setBody, setUrl } = postSlice.actions;
export default postSlice.reducer;
