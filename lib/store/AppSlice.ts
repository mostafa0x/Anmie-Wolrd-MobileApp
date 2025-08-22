import { AppSliceType } from "@/types/store/AppSliceType";
import { createSlice } from "@reduxjs/toolkit";

const initialState: AppSliceType = {
  isScrolling: true,
  lastAnmieIndex: null,
  isLoadingApp: true,
};
const AppSlice = createSlice({
  name: "AppSlice",
  initialState,
  reducers: {
    setIsScrolling: (state, action) => {
      state.isScrolling = action.payload;
    },
    setLastAnmieIndex: (state, action) => {
      state.lastAnmieIndex = action.payload;
    },
    setIsLoadingApp: (state, action) => {
      state.isLoadingApp = action.payload;
    },
  },
});

export const AppReducer = AppSlice.reducer;
export const { setIsLoadingApp, setIsScrolling, setLastAnmieIndex } =
  AppSlice.actions;
