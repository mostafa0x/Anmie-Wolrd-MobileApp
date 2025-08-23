import { setUserInfo } from "@/lib/store/UserSlice";
import { RemoveUserData } from "@/utils/storage";
import { signOut } from "./GoogleLogin";

export default async function handleLogOut(dispatch: any) {
  try {
    await signOut();
    await RemoveUserData();
    dispatch(setUserInfo({ userToken: null, userData: null }));
  } catch (err: any) {
    throw err;
  }
}
