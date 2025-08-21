import { AppSliceType } from "./AppSliceType";
import { GlobalErrorSliceType } from "./GlobalErrorSlice";

export interface StateType {
  AppReducer: AppSliceType;
  GlobalErrorReducer: GlobalErrorSliceType;
}
