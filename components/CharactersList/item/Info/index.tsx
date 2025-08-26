import GlassView from "@/components/GlassView";
import LoveIcon from "@/components/Icons/LoveIcon";
import { Colors, Fonts } from "@/constants/Colors";
import { CharactersType } from "@/types/CharactersType";
import { rf, rh, rw } from "@/utils/dimensions";
import { Image } from "expo-image";
import React, { memo } from "react";
import { StyleSheet, Text, View } from "react-native";

function Info_Char({
  isLoading,
  character,
}: {
  isLoading: boolean;
  character: CharactersType | null;
}) {
  return (
    <GlassView calledFrom="Home">
      {!isLoading && (
        <View style={styles.roleLoveContainer}>
          <Text style={styles.roleTitle}>{character?.role ?? "unknow"}</Text>
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
  );
}

const styles = StyleSheet.create({
  img: {
    width: rw(133),
    height: rh(203),
    borderRadius: rw(10),
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

export default memo(Info_Char, (prev, next) => {
  return (
    prev.isLoading === next.isLoading &&
    prev.character?.character.mal_id === next.character?.character.mal_id
  );
});
