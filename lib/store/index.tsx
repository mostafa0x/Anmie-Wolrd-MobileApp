import { configureStore } from "@reduxjs/toolkit";
import { AppReducer } from "./AppSlice";
import { GlobalErrorReducer } from "./GlobalErrorSlice";
import { UserReducer } from "./UserSlice";

export const store = configureStore({
  reducer: {
    AppReducer,
    UserReducer,
    GlobalErrorReducer,
  },
});
