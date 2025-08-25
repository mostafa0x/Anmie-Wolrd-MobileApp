import GlassView from "@/components/GlassView";
import LoveIcon from "@/components/Icons/LoveIcon";
import { Colors, Fonts } from "@/constants/Colors";
import { CharactersType } from "@/types/CharactersType";
import { rf, rh, rw } from "@/utils/dimensions";
import { Image } from "expo-image";
import React, { memo, useCallback, useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";

function CharactersItem({
  character,
  isLoading,
}: {
  character: CharactersType | null;
  isLoading: boolean;
}) {
  const [isCharacter, setIsCharacter] = useState(true);
  const flip = useSharedValue(0);

  const frontStyle = useAnimatedStyle(() => ({
    transform: [{ rotateY: `${flip.value}deg` }],
    backfaceVisibility: "hidden",
    position: "absolute",
  }));

  const backStyle = useAnimatedStyle(() => ({
    transform: [{ rotateY: `${flip.value + 180}deg` }],
    backfaceVisibility: "hidden",
  }));

  const flipCard = useCallback(() => {
    flip.value = withSpring(flip.value === 0 ? 180 : 0, {
      damping: 10,
      stiffness: 80,
    });
    setIsCharacter((pev) => (pev ? false : true));
  }, [flip]);

  return (
    <Pressable onPress={flipCard} style={styles.container}>
      <View>
        <Animated.View style={[styles.card, frontStyle]}>
          <GlassView calledFrom="Home">
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
            <Image
              style={styles.img}
              source={character?.character?.images?.jpg?.image_url ?? ""}
            />
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

        <Animated.View style={[styles.card, backStyle]}>
          <GlassView calledFrom="Home">
            <Image
              style={styles.img}
              source={
                character?.voice_actors?.[0]?.person?.images?.jpg?.image_url ??
                ""
              }
            />
          </GlassView>
          {!isLoading && (
            <Text
              numberOfLines={1}
              adjustsFontSizeToFit
              minimumFontScale={0.5}
              style={styles.title}
            >
              {character?.voice_actors[0]?.person?.name ?? "unknow"}
            </Text>
          )}
        </Animated.View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: rh(5),
    alignItems: "center",
  },
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

export default memo(CharactersItem, (prev, next) => {
  return (
    prev.isLoading === next.isLoading &&
    prev.character?.character.mal_id === next.character?.character.mal_id
  );
});
