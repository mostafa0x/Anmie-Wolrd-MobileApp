import GlassView from "@/components/GlassView";
import LoveIcon from "@/components/Icons/LoveIcon";
import { Colors, Fonts } from "@/constants/Colors";
import { CharactersType } from "@/types/CharactersType";
import { rf, rh, rw } from "@/utils/dimensions";
import { Image } from "expo-image";
import { Skeleton } from "moti/skeleton";
import React, { memo } from "react";
import { StyleSheet, Text, View } from "react-native";

function CharactersItem({
  character,
  isLoading,
}: {
  character: CharactersType | null;
  isLoading: boolean;
}) {
  return (
    <View style={{ height: "auto", gap: rh(5) }}>
      <GlassView calledFrom={"Home"}>
        <View
          style={{
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
          }}
        >
          <View>
            <Text style={styles.roleTitle}>{character?.role}</Text>
          </View>
          <View style={styles.loveCountContainer}>
            <Text style={styles.loveCount}>{character?.favorites}</Text>
            <LoveIcon />
          </View>
        </View>
        <View>
          <Skeleton show={isLoading}>
            <Image
              contentFit="fill"
              style={styles.img}
              source={character?.character?.images?.jpg?.image_url}
            />
          </Skeleton>
        </View>
      </GlassView>
      {!isLoading && (
        <Text
          numberOfLines={1}
          adjustsFontSizeToFit
          minimumFontScale={0.5}
          style={styles.title}
        >
          {character?.character?.name}
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
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
});

export default memo(CharactersItem);
