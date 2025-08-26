import { rh, rw } from "@/utils/dimensions";
import { BlurView } from "expo-blur";
import React, { memo } from "react";
import { StyleSheet } from "react-native";
import { fromType } from "../List";

function GlassView({
  children,
  calledFrom = "Home",
  type = 0,
}: {
  children?: React.ReactNode;
  calledFrom: fromType;
  type?: 0 | 1;
}) {
  return (
    <BlurView
      intensity={10}
      tint="extraLight"
      style={[
        styles.glass,
        calledFrom == "Category" && styles.glass_Category,
        calledFrom == "any" && styles.glass_Any,
      ]}
    >
      {children}
    </BlurView>
  );
}

const styles = StyleSheet.create({
  glass: {
    width: rw(133),
    height: rh(203),
    backgroundColor: "rgba(75, 66, 66, 0.2)",
    borderRadius: rw(20),
    overflow: "hidden",
    borderWidth: 0.3,
    borderColor: "#fff",
    borderBottomWidth: rw(2),
    borderTopWidth: rw(0.3),
  },
  glass_Category: {
    width: rw(114),
    height: rh(203),
    backgroundColor: "rgba(75, 66, 66, 0.2)",
    borderRadius: rw(20),
    overflow: "hidden",
    borderWidth: 0.3,
    borderColor: "#fff",
    borderBottomWidth: rw(2),
    borderTopWidth: rw(0.3),
  },
  glass_Any: {
    width: rw(352),
    height: rh(203),
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    borderRadius: rw(20),
    borderTopStartRadius: rw(20),
    borderTopEndRadius: rw(20),
    overflow: "hidden",
    borderWidth: 0.3,
    borderColor: "#fff",
    borderBottomWidth: rw(2),
    borderTopWidth: 0,
  },
});

export default memo(GlassView);
