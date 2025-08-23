import SignInGoogleIcon from "@/components/Icons/SignInGoogleIcon";
import { handleLogin } from "@/services/handleLogin";
import { rh, rw } from "@/utils/dimensions";
import { Image } from "expo-image";
import React, { useState } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { useDispatch } from "react-redux";

const Login = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  async function loginByGoogle() {
    if (isLoading) return;
    setIsLoading(true);
    try {
      await handleLogin(dispatch);
    } catch (err: any) {
      console.log(err);
      setIsLoading(false);
    }
  }
  return (
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
    </View>
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
    backgroundColor: "rgba(0,0,0,0.8)",
    overflow: "hidden",
    borderRadius: rw(8),
    width: rw(220),
    height: rh(40),
    position: "absolute",
    top: rh(252),
    left: rw(85),
    zIndex: 1,
  },
});
export default Login;
