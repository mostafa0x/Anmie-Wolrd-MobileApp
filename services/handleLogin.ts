import { SetUserData } from "@/utils/storage";
import { SignInResponse } from "@react-native-google-signin/google-signin";
import axios from "axios";
import { signIn } from "./GoogleLogin";

export async function handleLogin(dispatch: any) {
  const resLogin: SignInResponse = await signIn();
  if (resLogin.type == "success") {
    try {
      const res = await axios.post(
        "https://duck-generous-krill.ngrok-free.app/auth/google",
        { token: resLogin.data.idToken }
      );
      console.log(res.data.accessToken);

      SetUserData(
        {
          userToken: res.data.accessToken,
          userData: resLogin.data.user,
        },
        dispatch
      );
    } catch (err: any) {
      console.log("Google Login");

      SetUserData(
        {
          userToken: resLogin.data.idToken,
          userData: resLogin.data.user,
        },
        dispatch
      );
      //  throw err;
    }
  } else {
    throw "login error!";
  }
}
