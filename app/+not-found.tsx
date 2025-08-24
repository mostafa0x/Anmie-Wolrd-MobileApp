import { Colors, Fonts } from "@/constants/Colors";
import { rf, rh } from "@/utils/dimensions";
import { useRouter } from "expo-router";
import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

export default function NotFoundScreen() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Not Found Screen</Text>

      <Button onPress={() => router.replace("/")} title="Back to Home" />
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
