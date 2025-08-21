import { AppSliceType } from "@/types/store/AppSliceType";
import { createSlice } from "@reduxjs/toolkit";

const initialState: AppSliceType = {
  isScrolling: true,
  lastAnmieIndex: null,
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
  },
});

export const AppReducer = AppSlice.reducer;
export const { setIsScrolling, setLastAnmieIndex } = AppSlice.actions;
