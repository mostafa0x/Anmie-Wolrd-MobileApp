import SignInGoogleIcon from "@/components/Icons/SignInGoogleIcon";
import Loader from "@/components/Loader";
import { Fonts } from "@/constants/Colors";
import { handleLogin } from "@/services/handleLogin";
import { rf, rh, rw } from "@/utils/dimensions";
import { Image } from "expo-image";
import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useDispatch } from "react-redux";

const Login = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [errorRes, setErrorRes] = useState<string | null>(null);

  async function loginByGoogle() {
    if (isLoading) return;
    setIsLoading(true);
    setErrorRes(null);
    try {
      await handleLogin(dispatch);
    } catch (err: any) {
      console.log(err);
      setIsLoading(false);
      setErrorRes("Login Error !");
    }
  }

  return (
    <>
      {isLoading && <Loader />}
      <View style={styles.container}>
        <View>
          <Image
            style={styles.titleImg}
            source={require("@/assets/images/title.png")}
          />
        </View>
        {isLoading && <View style={styles.signInBtn_disabled}></View>}
        <TouchableOpacity
          disabled={isLoading}
          onPress={loginByGoogle}
          style={styles.signInBtn}
        >
          <SignInGoogleIcon />
        </TouchableOpacity>
        {errorRes && <Text style={styles.errorTitle}>{errorRes}</Text>}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: rw(53),
    marginTop: rh(157),
    alignItems: "center",
  },
  titleImg: {
    width: rw(285),
    height: rh(92),
  },
  signInBtn: {
    marginTop: rh(160),
  },
  signInBtn_disabled: {
    backgroundColor: "rgba(0,0,0,0.6)",
    overflow: "hidden",
    borderRadius: rw(8),
    width: rw(220),
    height: rh(40),
    position: "absolute",
    top: rh(252),
    left: rw(85),
    zIndex: 1,
  },
  errorTitle: {
    marginTop: rh(20),
    fontFamily: Fonts.RoadRageRegular,
    fontSize: rf(28),
    color: "#f72020",
  },
});
export default Login;
