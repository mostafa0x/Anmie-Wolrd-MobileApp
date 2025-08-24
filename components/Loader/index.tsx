import { Colors } from "@/constants/Colors";
import { rf } from "@/utils/dimensions";
import React from "react";
import { StyleSheet, View } from "react-native";
import { ActivityIndicator, Portal } from "react-native-paper";

export default function Loader() {
  return (
    <Portal>
      <View style={styles.container}>
        <ActivityIndicator color={Colors.iconColor} size={rf(80)} />
      </View>
    </Portal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
  },
});
