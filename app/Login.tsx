import SignInGoogleIcon from "@/components/Icons/SignInGoogleIcon";
import { rh, rw } from "@/utils/dimensions";
import * as Google from "expo-auth-session/providers/google";
import { Image } from "expo-image";
import * as WebBrowser from "expo-web-browser";
import React, { useEffect } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { useDispatch } from "react-redux";

WebBrowser.maybeCompleteAuthSession();

export default function Auth() {
  const dispatch = useDispatch();

  const [request, response, promptAsync] = Google.useAuthRequest({
    androidClientId:
      "860499439086-qeiqhfb270m1hjif5fcr3susab4i4p34.apps.googleusercontent.com",
  });

  useEffect(() => {
    if (response?.type === "success") {
      const { authentication } = response;
      console.log("Token:", authentication?.accessToken);
    }
  }, [response]);

  return (
    <View style={styles.container}>
      <View>
        <Image
          style={styles.titleImg}
          source={require("@/assets/images/title.png")}
        />
      </View>
      <TouchableOpacity onPress={() => promptAsync()} style={styles.signInBtn}>
        <SignInGoogleIcon />
      </TouchableOpacity>
    </View>
  );
}

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
});
