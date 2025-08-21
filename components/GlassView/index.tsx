import { rh, rw } from "@/utils/dimensions";
import { BlurView } from "expo-blur";
import React from "react";
import { StyleSheet } from "react-native";
import { fromType } from "../List";

export default function GlassView({
  children,
  calledFrom = "Home",
  type = 0,
}: {
  children?: React.ReactNode;
  calledFrom: fromType;
  type?: 0 | 1;
}) {
  const styles = getStyles(calledFrom, type);
  return (
    <BlurView intensity={10} tint="extraLight" style={styles.glass}>
      {children}
    </BlurView>
  );
}

function getStyles(calledFrom: fromType, type: number) {
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
      backgroundColor:
        type == 0 ? "rgba(75, 66, 66, 0.2)" : "rgba(0, 0, 0, 0.6)",
      borderRadius: rw(radius),
      borderTopStartRadius: calledFrom == "any" ? rw(0) : rw(radius),
      borderTopEndRadius: calledFrom == "any" ? rw(0) : rw(radius),
      overflow: "hidden",
      borderWidth: 0.3,
      borderColor: "rgba(255,255,255,0.7)",
      borderBottomWidth: rw(2),
      borderTopWidth: (type = 0 ? 0.3 : 0),
    },
  });
}
