import { rh, rw } from "@/utils/dimensions";
import { Image } from "expo-image";
import React, { ComponentRef, memo, useRef } from "react";
import { StyleSheet, View } from "react-native";
import Carousel from "react-native-reanimated-carousel";

function Slider() {
  const data = useRef([
    require("@/assets/images/test3.jpg"),
    require("@/assets/images/test2.jpg"),
  ]);
  const carouselRef = useRef<ComponentRef<typeof Carousel>>(null);

  return (
    <View style={styles.silderContainer}>
      <Carousel
        ref={carouselRef}
        width={styles.silderContainer.width}
        height={styles.silderContainer.height}
        data={data.current}
        autoPlay
        autoPlayInterval={3000}
        mode={"horizontal-stack"}
        modeConfig={{
          snapDirection: "left",
          stackInterval: 0,
        }}
        renderItem={({ item, index }) => (
          <Image
            contentFit="fill"
            style={{
              width: "100%",
              height: "100%",
              borderRadius: rw(20),
            }}
            source={item}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  silderContainer: {
    width: rw(352),
    height: rh(221),
    marginTop: rh(19),
    marginHorizontal: rw(19),
  },
});

export default memo(Slider);
