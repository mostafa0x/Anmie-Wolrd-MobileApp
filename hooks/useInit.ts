import { setUserInfo } from "@/lib/store/UserSlice";
import { GetUserData } from "@/utils/storage";

export default async function useInit(dispatch: any) {
  try {
    const UserInfo = await GetUserData();
    dispatch(setUserInfo(UserInfo));
    return UserInfo;
  } catch (err: any) {
    console.log(err);
  }
}
