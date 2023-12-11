import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  drawnWinningNums: ["", "", "", "", ""],
};

export const winningNumbersSlice = createSlice({
  name: "winningNumbers",
  initialState,
  reducers: {
    theWinningNums: (state, action) => {
      state.drawnWinningNums = action.payload;
    },
    resetWinningNums: (state) => {
      state.drawnWinningNums = initialState.drawnWinningNums;
    }
  },
});

export const { theWinningNums, resetWinningNums } = winningNumbersSlice.actions;

export default winningNumbersSlice.reducer;