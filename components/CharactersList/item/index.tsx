import GlassView from "@/components/GlassView";
import LoveIcon from "@/components/Icons/LoveIcon";
import { Colors, Fonts } from "@/constants/Colors";
import { CharactersType } from "@/types/CharactersType";
import { rf, rh, rw } from "@/utils/dimensions";
import { Image } from "expo-image";
import { Skeleton } from "moti/skeleton";
import React, { memo, useRef, useState } from "react";
import {
  Animated,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

function CharactersItem({
  character,
  isLoading,
}: {
  character: CharactersType | null;
  isLoading: boolean;
}) {
  const [isCharacter, setIsCharacter] = useState(true);
  const flipAnim = useRef(new Animated.Value(0)).current;

  const frontInterpolate = flipAnim.interpolate({
    inputRange: [0, 180],
    outputRange: ["0deg", "180deg"],
  });

  const backInterpolate = flipAnim.interpolate({
    inputRange: [0, 180],
    outputRange: ["180deg", "360deg"],
  });

  const flipCard = () => {
    Animated.spring(flipAnim, {
      toValue: isCharacter ? 180 : 0,
      useNativeDriver: true,
      friction: 8,
      tension: 10,
    }).start(() => {
      setIsCharacter(!isCharacter);
    });
  };

  return (
    <TouchableOpacity onPress={flipCard} style={styles.container}>
      <View>
        <Animated.View
          style={[
            styles.card,
            {
              transform: [{ rotateY: frontInterpolate }],
              position: "absolute",
              backfaceVisibility: "hidden",
            },
          ]}
        >
          <GlassView calledFrom={"Home"}>
            {!isLoading && (
              <View style={styles.roleLoveContainer}>
                <Text style={styles.roleTitle}>
                  {character?.role ?? "unknow"}
                </Text>
                <View style={styles.loveCountContainer}>
                  <Text style={styles.loveCount}>
                    {character?.favorites ?? "unknow"}
                  </Text>
                  <LoveIcon />
                </View>
              </View>
            )}
            <Skeleton show={isLoading}>
              <Image
                contentFit="fill"
                style={styles.img}
                source={character?.character?.images?.jpg?.image_url ?? ""}
              />
            </Skeleton>
          </GlassView>
          {!isLoading && (
            <Text
              numberOfLines={1}
              adjustsFontSizeToFit
              minimumFontScale={0.5}
              style={styles.title}
            >
              {character?.character?.name ?? "unknow"}
            </Text>
          )}
        </Animated.View>

        <Animated.View
          style={[
            styles.card,
            {
              transform: [{ rotateY: backInterpolate }],
              backfaceVisibility: "hidden",
            },
          ]}
        >
          <GlassView calledFrom={"Home"}>
            <Skeleton show={isLoading}>
              <Image
                contentFit="fill"
                style={styles.img}
                source={
                  character?.voice_actors?.[0]?.person?.images?.jpg
                    ?.image_url ?? ""
                }
              />
            </Skeleton>
          </GlassView>
          {!isLoading && (
            <Text
              numberOfLines={1}
              adjustsFontSizeToFit
              minimumFontScale={0.5}
              style={styles.title}
            >
              {character?.voice_actors?.[0]?.person?.name ?? "unknow"}
            </Text>
          )}
        </Animated.View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: { height: "auto", gap: rh(5), alignItems: "center" },
  card: {
    width: rw(133),
    alignItems: "center",
  },
  img: {
    width: rw(133),
    height: rh(203),
    borderRadius: rw(10),
  },
  title: {
    fontFamily: Fonts.RoadRageRegular,
    fontSize: rf(24),
    color: Colors.textColor,
    width: rw(133),
    textAlign: "center",
    flexShrink: 1,
    marginTop: rh(5),
  },
  loveCount: {
    fontFamily: Fonts.RoadRageRegular,
    fontSize: rf(24),
    color: Colors.textColor,
  },
  roleTitle: {
    fontFamily: Fonts.RoadRageRegular,
    fontSize: rf(24),
    color: Colors.textColor,
  },
  loveCountContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: rw(3),
  },
  roleLoveContainer: {
    position: "absolute",
    bottom: rh(0),
    right: rw(0),
    width: "100%",
    zIndex: 1,
    height: rh(30),
    backgroundColor: "rgba(0,0,0,0.5)",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: rw(10),
  },
});

export default memo(CharactersItem);
