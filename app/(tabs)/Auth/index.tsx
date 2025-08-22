import SignInGoogleIcon from "@/components/Icons/SignInGoogleIcon";
import { rh, rw } from "@/utils/dimensions";
import { Image } from "expo-image";
import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";

export default function Auth() {
  return (
    <View style={styles.container}>
      <View>
        <Image
          style={styles.titleImg}
          source={require("@/assets/images/title.png")}
        />
      </View>
      <TouchableOpacity style={styles.signInBtn}>
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
