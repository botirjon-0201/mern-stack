import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  regName: "",
  regEmail: "",
  regPassword: "",
  isOpenModal: false,
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
    setIsOpenModal(state, action) {
      state.isOpenModal = action.payload;
    },
  },
});

export const { setRegName, setRegEmail, setRegPassword, setIsOpenModal } =
  regSlice.actions;
export default regSlice.reducer;
