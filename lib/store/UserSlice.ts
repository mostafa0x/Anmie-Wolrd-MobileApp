import { userDataType, UserSliceType } from "@/types/store/UserSliceType";
import { createSlice } from "@reduxjs/toolkit";

interface ActionType {
  type: string;
  payload: { userToken: string | null; userData: userDataType | null };
}

const initialState: UserSliceType = {
  userToken: null,
  userData: null,
};

const UserSlice = createSlice({
  name: "UserSlice",
  initialState,
  reducers: {
    setUserInfo: (state, action: ActionType) => {
      (state.userToken = action.payload.userToken),
        (state.userData = action.payload.userData);
    },
  },
});

export const UserReducer = UserSlice.reducer;
export const { setUserInfo } = UserSlice.actions;
