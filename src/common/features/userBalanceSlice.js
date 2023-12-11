import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userBalance: (JSON.parse(localStorage.getItem("balanceOfUser") ?? 10000)),
  enoughBalance: true,
  propagate: true,
  totalPrize: 0,
};

export const userBalanceSlice = createSlice({
  name: "yourBalance",
  initialState,
  reducers: {
    increaseBalance: (state, action) => {
      state.userBalance += action.payload;
    },
    decreaseBalance: (state) => {
      if(state.userBalance >= 500) {
        state.userBalance -= 500;
        localStorage.setItem('balanceOfUser', JSON.stringify(state.userBalance));
        state.enoughBalance = true;
      } else {
        state.userBalance;
      }
      state.propagate = true;
    },
    enoughBalance: (state, action) => {
      state.enoughBalance = action.payload;
    },
    doNotPropagateTooLowBalance: (state, action) => {
      state.propagate = action.payload;
    },
    totalPrize: (state, action) => {
      console.log("action.payload:::",action.payload);
      state.totalPrize += action.payload;    console.log("state.totalPrize::::", state.totalPrize);
    },
    resetBalance: (state) => {
      state.userBalance = 10000;
    },
    resetTotalPrize: (state) => {
      state.totalPrize = 0;
    },
  },
});

export const { increaseBalance, decreaseBalance, enoughBalance, doNotPropagateTooLowBalance, totalPrize, resetBalance, resetTotalPrize } = userBalanceSlice.actions;

export default userBalanceSlice.reducer;