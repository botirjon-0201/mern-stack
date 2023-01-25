import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: "",
  clicked: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action) {
      state.user = action.payload;
    },
    setClicked(state, action) {
      state.clicked = action.payload;
    },
  },
});

export const { setUser, setClicked } = userSlice.actions;
export default userSlice.reducer;
