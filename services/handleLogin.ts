import { setUserInfo } from "@/lib/store/UserSlice";
import { SetUserData } from "@/utils/storage";
import { SignInResponse } from "@react-native-google-signin/google-signin";
import { signIn } from "./GoogleLogin";

export async function handleLogin(dispatch: any) {
  const resLogin: SignInResponse = await signIn();
  if (resLogin.type == "success") {
    console.log(resLogin.data.user);
    SetUserData({
      userToken: resLogin.data.idToken,
      userData: resLogin.data.user,
    });
    dispatch(
      setUserInfo({
        userToken: resLogin.data.idToken,
        userData: resLogin.data.user,
      })
    );
  } else {
    throw "login error!";
  }
}
