import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "./counter";
import { privacySlice } from "./privacy";

export const counterStore = configureStore({
  reducer: { counter: counterSlice.reducer, privacy: privacySlice.reducer },
});
