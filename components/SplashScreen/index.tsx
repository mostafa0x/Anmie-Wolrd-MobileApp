import LoadingIcon from "@/components/Icons/LoadingIcon";
import { rh, rw } from "@/utils/dimensions";
import { Image } from "expo-image";
import React from "react";
import { StyleSheet, View } from "react-native";
import * as Animatable from "react-native-animatable";

export default function SplashScreenFC() {
  return (
    <View style={styles.container}>
      <View style={styles.imgContainer}>
        <Image
          style={styles.img}
          source={require("@/assets/images/SplashImg.png")}
        />
      </View>
      <View>
        <View style={styles.loadingContainer}>
          <View style={{ marginLeft: rw(15) }}>
            <Image
              style={styles.loading}
              source={require("@/assets/images/loading.gif")}
            />
          </View>
          <Animatable.View
            animation="tada"
            iterationCount={Infinity}
            easing={"ease-in-expo"}
          >
            <LoadingIcon />
          </Animatable.View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imgContainer: {
    marginTop: rh(250),
    justifyContent: "center",
    alignItems: "center",
  },
  img: {
    width: rw(374),
    height: rh(280),
  },
  loadingContainer: {
    alignItems: "center",
    marginTop: rh(74),
  },
  loading: {
    width: rw(157),
    height: rh(133),
  },
});
