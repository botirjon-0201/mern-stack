import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  logEmail: "",
  logPassword: "",
};

export const logSlice = createSlice({
  name: "log",
  initialState,
  reducers: {
    setLogEmail(state, action) {
      state.logEmail = action.payload;
    },
    setLogPassword(state, action) {
      state.logPassword = action.payload;
    },
  },
});

export const { setLogEmail, setLogPassword } = logSlice.actions;
export default logSlice.reducer;
