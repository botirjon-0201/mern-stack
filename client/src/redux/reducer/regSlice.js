import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  regName: "",
  regEmail: "",
  regPassword: "",
  urlProfPhoto: "",
};

export const regSlice = createSlice({
  name: "reg",
  initialState,
  reducers: {
    setRegName(state, action) {
      state.regName = action.payload;
    },
    setRegEmail(state, action) {
      state.regEmail = action.payload;
    },
    setRegPassword(state, action) {
      state.regPassword = action.payload;
    },
    setUrlProfPhoto(state, action) {
      state.urlProfPhoto = action.payload;
    },
  },
});

export const { setRegName, setRegEmail, setRegPassword, setUrlProfPhoto } =
  regSlice.actions;
export default regSlice.reducer;
