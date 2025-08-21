import { Colors, Fonts } from "@/constants/Colors";
import { setCurrentError } from "@/lib/store/GlobalErrorSlice";
import { StateType } from "@/types/store/StateType";
import { rf, rh, rw } from "@/utils/dimensions";
import { useQueryClient } from "@tanstack/react-query";
import { Image } from "expo-image";
import React, { memo, useEffect, useRef } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button, Portal } from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";

function GlobalError() {
  const imgs = useRef({
    def: require("@/assets/Character/def.png"),
    noInternet: require("@/assets/Character/noInternet.png"),
    serverError: require("@/assets/Character/serverError.png"),
  });
  const { currentError } = useSelector(
    (state: StateType) => state.GlobalErrorReducer
  );
  const dispatch = useDispatch();
  const querryClient = useQueryClient();

  function ReFeatchAll() {
    querryClient.invalidateQueries();
    dispatch(setCurrentError(null));
  }

  useEffect(() => {
    console.log(currentError);

    return () => {};
  }, [currentError]);

  return (
    <Portal>
      <View style={styles.container}>
        <View style={styles.contant}>
          <Image
            style={styles.img}
            contentFit="contain"
            source={imgs.current?.[currentError?.type ?? "noInternet"]}
          />
          <Text
            adjustsFontSizeToFit
            minimumFontScale={0.5}
            numberOfLines={1}
            style={styles.headerTxt}
          >
            {currentError?.header ?? "An error occurred"}
          </Text>
          <Text
            style={styles.secTxt}
            numberOfLines={4}
            adjustsFontSizeToFit
            minimumFontScale={0.5}
            ellipsizeMode="clip"
          >
            {currentError?.des ?? "Try again later"}{" "}
            {/* No Internet connection. Please try again */}
          </Text>
          <Button
            onPress={() => ReFeatchAll()}
            labelStyle={styles.btn_lable}
            buttonColor="#000"
            style={styles.btn}
          >
            Try Again
          </Button>
        </View>
      </View>
    </Portal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    alignItems: "center",
    justifyContent: "center",
  },
  contant: {
    backgroundColor: Colors.errorBg,
    width: "100%",
    height: rh(350),
  },
  img: {
    width: "100%",
    height: rh(320),
    position: "absolute",
    left: rw(80),
    top: rh(40),
  },
  headerTxt: {
    fontFamily: Fonts.RoadRageRegular,
    fontSize: rf(72),
    color: Colors.textColor,
    position: "absolute",
    top: rh(-10),
    left: rw(20),
  },
  secTxt: {
    fontFamily: Fonts.RoadRageRegular,
    fontSize: rf(32),
    color: Colors.textColor,
    position: "absolute",
    top: rh(110),
    left: rw(20),
    width: rw(180),
  },
  btn: {
    top: rh(270),
    left: rw(40),
    width: rw(120),
  },
  btn_lable: {
    fontFamily: Fonts.RoadRageRegular,
    fontSize: rf(22),
    color: Colors.textColor,
    lineHeight: rh(24),
  },
});

export default memo(GlobalError);
