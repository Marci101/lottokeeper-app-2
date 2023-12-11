import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
  message: '',
  withInputField: false,
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    showModal: (state, action) => {
      state.isOpen = action.payload.isOpen;
      state.message = action.payload.message;
      state.withInputField = action.payload.withInputField;
    },
  },
});

export const { showModal } = modalSlice.actions;

export default modalSlice.reducer;
