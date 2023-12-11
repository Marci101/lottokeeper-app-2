import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userNumbers: [],
};

export const userNumbersSlice = createSlice({
  name: "yourNumbers",
  initialState,
  reducers: {
    saveUserNums: (state, action) => {
      return { 
        ...state, 
        userNumbers: [
          ...state.userNumbers,
          action.payload
        ]
      }
    },
    updateUserNums: (state, action) => {
      state.userNumbers = action.payload;
    },
    resetAllUserNums: (state) => {
      state.userNumbers = initialState.userNumbers;
    }
  },
});

export const { saveUserNums, updateUserNums, resetAllUserNums } = userNumbersSlice.actions;

export default userNumbersSlice.reducer;