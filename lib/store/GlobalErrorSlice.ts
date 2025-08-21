import {
  ErrorType,
  GlobalErrorSliceType,
} from "@/types/store/GlobalErrorSlice";
import { createSlice } from "@reduxjs/toolkit";

interface ActionType {
  type: string;
  payload: {
    header: string;
    des: string;
    type: ErrorType;
  } | null;
}
const initialState: GlobalErrorSliceType = {
  currentError: null,
};
const GlobalErrorSlice = createSlice({
  name: "GlobalErrorSlice",
  initialState,
  reducers: {
    setCurrentError: (state, action: ActionType) => {
      state.currentError = action.payload;
    },
  },
});

export const GlobalErrorReducer = GlobalErrorSlice.reducer;

export const { setCurrentError } = GlobalErrorSlice.actions;
