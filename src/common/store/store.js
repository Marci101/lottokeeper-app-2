import { configureStore } from '@reduxjs/toolkit';
import modalReducer from '../features/modalSlice';
import userNameReducer from '../features/userNameSlice';
import userNumbersReducer from '../features/userNumbersSlice';
import userBalanceReducer from '../features/userBalanceSlice';
import winningNumbersSlice from "../features/winningNumbersSlice";

export const store = configureStore({
  reducer: {
    modal: modalReducer,
    yourName: userNameReducer,
    yourNumbers: userNumbersReducer,
    yourBalance: userBalanceReducer,
    winningNumbers: winningNumbersSlice,
  }
});