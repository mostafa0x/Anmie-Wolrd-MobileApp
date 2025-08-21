import { configureStore } from "@reduxjs/toolkit";
import { AppReducer } from "./AppSlice";
import { GlobalErrorReducer } from "./GlobalErrorSlice";

export const store = configureStore({
  reducer: {
    AppReducer,
    GlobalErrorReducer,
  },
});
