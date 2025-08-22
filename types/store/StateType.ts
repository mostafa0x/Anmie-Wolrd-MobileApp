import { AppSliceType } from "./AppSliceType";
import { GlobalErrorSliceType } from "./GlobalErrorSlice";
import { UserSliceType } from "./UserSliceType";

export interface StateType {
  AppReducer: AppSliceType;
  GlobalErrorReducer: GlobalErrorSliceType;
  UserReducer: UserSliceType;
}
