import { rh, rw } from "@/utils/dimensions";
import { BlurView } from "expo-blur";
import React from "react";
import { StyleSheet } from "react-native";
import { fromType } from "../List";

export default function GlassView({
  children,
  calledFrom = "Home",
}: {
  children?: React.ReactNode;
  calledFrom: fromType;
}) {
  const styles = getStyles(calledFrom);
  return (
    <BlurView intensity={10} tint="extraLight" style={styles.glass}>
      {children}
    </BlurView>
  );
}

function getStyles(calledFrom: fromType) {
  const radius = 20;
  return StyleSheet.create({
    glass: {
      width:
        calledFrom == "Home"
          ? rw(133)
          : calledFrom == "Category"
          ? rw(114)
          : rw(352),
      height: rh(203),
      backgroundColor: "rgba(199, 193, 193, 0.2)",
      borderRadius: rw(radius),
      borderTopStartRadius: calledFrom == "any" ? rw(0) : rw(radius),
      borderTopEndRadius: calledFrom == "any" ? rw(0) : rw(radius),
      overflow: "hidden",
      borderWidth: 0.3,
      borderColor: "rgba(255,255,255,0.7)",
      borderBottomWidth: rw(2),
    },
  });
}
