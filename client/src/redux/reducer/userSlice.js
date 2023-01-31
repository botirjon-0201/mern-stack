import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  profile: null,
  clicked: false,
  follow: false,
  isEdit: false,
  myName: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action) {
      state.user = action.payload;
    },
    setProfile(state, action) {
      state.profile = action.payload;
    },
    setClicked(state, action) {
      state.clicked = action.payload;
    },
    setFollow(state, action) {
      state.follow = action.payload;
    },
    setIsEdit(state, action) {
      state.isEdit = action.payload;
    },
    setMyName(state, action) {
      state.myName = action.payload;
    },
  },
});

export const {
  setUser,
  setProfile,
  setClicked,
  setFollow,
  setIsEdit,
  setMyName,
} = userSlice.actions;
export default userSlice.reducer;
