import LoveIcon from "@/components/Icons/LoveIcon";
import StarIcon from "@/components/Icons/StarIcon";
import { Colors, Fonts } from "@/constants/Colors";
import { AnmieType } from "@/types/store/AppSliceType";
import { rf, rh, rw } from "@/utils/dimensions";
import { BlurView } from "expo-blur";
import { Image } from "expo-image";
import React, { memo } from "react";
import { StyleSheet, Text, View } from "react-native";

function ListItem({ item }: { item: AnmieType }) {
  const img = item?.images?.webp?.image_url
    ? { uri: item?.images?.webp?.image_url }
    : require("@/assets/images/img.png");
  return (
    <BlurView intensity={10} tint="extraLight" style={styles.glass}>
      <Image style={styles.img} source={img} />
      <Text style={styles.title} numberOfLines={1} ellipsizeMode="tail">
        {item?.title_english ?? "unkonw"}
      </Text>
      <View style={styles.info}>
        <View style={styles.infoMin}>
          <Text style={styles.infoTxt}>{item.favorites}</Text>
          <LoveIcon width={rw(16)} height={rh(16)} />
        </View>
        <View style={styles.infoMin}>
          <Text style={styles.infoTxt}>{item.score || "unkonw"}</Text>
          <StarIcon width={rw(20)} height={rh(20)} />
        </View>
      </View>
    </BlurView>
  );
}

const styles = StyleSheet.create({
  glass: {
    width: rw(133),
    height: rh(203),
    backgroundColor: "rgba(199, 193, 193, 0.2)",
    borderRadius: rw(20),
    overflow: "hidden",
    borderWidth: 0.3,
    borderColor: "rgba(255,255,255,0.7)",
    borderBottomWidth: 2,
  },
  img: {
    width: rw(133),
    height: rh(134),
    borderRadius: rw(20),
  },
  title: {
    fontFamily: Fonts.RoadRageRegular,
    color: Colors.textColor,
    fontSize: rf(30),
    paddingLeft: rw(7),
    width: rw(130),
  },
  info: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: rw(12),
  },
  infoTxt: {
    fontFamily: Fonts.RoadRageRegular,
    fontSize: rf(16),
    color: Colors.textColor,
  },
  infoMin: {
    flexDirection: "row",
    alignItems: "center",
    gap: rw(3),
  },
});

export default memo(ListItem);
