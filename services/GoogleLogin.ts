import {
  GoogleSignin,
  statusCodes,
} from "@react-native-google-signin/google-signin";

GoogleSignin.configure({
  scopes: ["https://www.googleapis.com/auth/userinfo.profile"],
  webClientId:
    "860499439086-o6mh9sr44c6ra9u3abdf3i8r1e0hq6vt.apps.googleusercontent.com",
  offlineAccess: true,
  forceCodeForRefreshToken: true,
});

export const signIn = async () => {
  try {
    await GoogleSignin.hasPlayServices();
    const userInfo = await GoogleSignin.signIn();
    return userInfo;
  } catch (error: any) {
    let err = null;
    if (error.code === statusCodes.SIGN_IN_CANCELLED) {
      err = "cancelled";
    } else if (error.code === statusCodes.IN_PROGRESS) {
      err = "in Progress";
    } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
      err = "services in not available";
    } else {
      err = error.toString();
      console.log(error.toString());
    }
    return err;
  }
};

export const signOut = async () => {
  try {
    await GoogleSignin.signOut();
    console.log("log out");
  } catch (error) {
    console.error(error);
  }
};
