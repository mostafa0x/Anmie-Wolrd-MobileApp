import { Colors, Fonts } from "@/constants/Colors";
import { rf, rh } from "@/utils/dimensions";
import { Link } from "expo-router";
import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

export default function NotFoundScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Not Found Screen</Text>
      <Link href={"/"}>
        <Button title="Back to Home" />
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    gap: rh(20),
    marginTop: rh(100),
  },
  title: {
    fontFamily: Fonts.RoadRageRegular,
    color: Colors.textColor,
    fontSize: rf(38),
  },
});
