import AvatarFC from "@/components/AvatarFC";
import { Colors } from "@/constants/Colors";
import { rf, rh, rw } from "@/utils/dimensions";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Menu() {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <AvatarFC avatar="" />
        <View style={styles.headerTEXT}>
          <Text style={styles.upperLable}>Mostafa Ahmed</Text>
          <Text style={styles.lowerLable}>sasa@gmail.com</Text>
        </View>
      </View>
      <View style={styles.bordrBottom}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: rw(16),
    paddingVertical: rh(35),
  },
  headerContainer: {
    gap: rw(23),
    flexDirection: "row",
    alignItems: "center",
  },
  headerTEXT: {
    gap: rh(18),
  },
  upperLable: {
    fontSize: rf(24),
    color: Colors.textColor,
  },
  lowerLable: {
    fontSize: rf(24),
    color: Colors.iconColor,
  },
  bordrBottom: {
    borderBottomWidth: 2,
    paddingBottom: rh(34),
    borderColor: "#978D8D",
    marginLeft: rw(38),
    marginRight: rw(21),
  },
});
