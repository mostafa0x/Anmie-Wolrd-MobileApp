import GlassView from "@/components/GlassView";
import { rh, rw } from "@/utils/dimensions";
import { Image } from "expo-image";
import React, { memo } from "react";
import { StyleSheet, View } from "react-native";

function CharactersItem() {
  return (
    <GlassView calledFrom={"Home"}>
      <View>
        <Image style={styles.img} source={""} />
      </View>
    </GlassView>
  );
}

const styles = StyleSheet.create({
  img: {
    width: rw(100),
    height: rh(100),
  },
});

export default memo(CharactersItem);
