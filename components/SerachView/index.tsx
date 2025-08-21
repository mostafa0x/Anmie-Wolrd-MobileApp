import { Colors } from "@/constants/Colors";
import { rh, rw } from "@/utils/dimensions";
import React, { memo } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Portal } from "react-native-paper";

function SerachView() {
  return (
    <Portal>
      <View style={styles.container}>
        <View style={styles.contantContaner}></View>
        <Text>SerachView</Text>
      </View>
    </Portal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: rw(20),
  },
  contantContaner: {
    backgroundColor: Colors.textColor,
    borderRadius: rw(20),
    width: "100%",
    height: rh(400),
  },
});
export default memo(SerachView);
