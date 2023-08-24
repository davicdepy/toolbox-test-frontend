import { configureStore } from '@reduxjs/toolkit';
import counterReducer from "./reduxService";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});