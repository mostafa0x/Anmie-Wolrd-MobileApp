import { Colors, Fonts } from "@/constants/Colors";
import { rf, rh, rw } from "@/utils/dimensions";
import { useRouter } from "expo-router";
import React, { memo } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-paper";

function NotFoundAnmie() {
  const router = useRouter();

  function handleBack() {
    if (!router) return;
    if (router.canGoBack()) {
      router.back();
    } else {
      router.replace("/");
    }
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Not Found This Anmie</Text>
      <Button
        onPress={() => handleBack()}
        buttonColor={Colors.iconColor}
        textColor={Colors.textColor}
        style={styles.btnContainer}
        labelStyle={styles.label}
      >
        Back
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: rh(300),
  },
  title: {
    fontFamily: Fonts.RoadRageRegular,
    fontSize: rf(68),
    color: Colors.textColor,
  },
  btnContainer: {
    width: rw(200),
    height: rh(50),
    marginTop: rh(40),
  },
  label: {
    fontFamily: Fonts.RoadRageRegular,
    fontSize: rf(48),
    lineHeight: rh(30),
  },
});

export default memo(NotFoundAnmie);
