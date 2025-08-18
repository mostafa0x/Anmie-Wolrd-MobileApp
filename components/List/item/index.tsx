import LoveIcon from "@/components/Icons/LoveIcon";
import StarIcon from "@/components/Icons/StarIcon";
import { Colors, Fonts } from "@/constants/Colors";
import { AnmieType } from "@/types/store/AppSliceType";
import { rf, rh, rw } from "@/utils/dimensions";
import { BlurView } from "expo-blur";
import { Image } from "expo-image";
import { useRouter } from "expo-router";
import { Skeleton } from "moti/skeleton";
import React, { memo } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { fromType } from "..";

function ListItem({
  item,
  isLoading,
  from,
}: {
  item: AnmieType;
  isLoading: boolean;
  from: fromType;
}) {
  const styles = getStyles(from);

  const img = item?.images?.webp?.image_url
    ? { uri: item?.images?.webp?.image_url }
    : require("@/assets/images/img.png");
  const router = useRouter();
  return (
    <TouchableOpacity onPress={() => router.push(`/AnmieInfo/${item.mal_id}`)}>
      <BlurView intensity={10} tint="extraLight" style={styles.glass}>
        {isLoading ? (
          <Skeleton
            width={styles.img.width}
            height={styles.img.height}
            radius={rw(20)}
            colorMode="dark"
          />
        ) : (
          <Image style={styles.img} source={img} />
        )}
        {isLoading ? (
          <View style={{ marginTop: rh(20), paddingHorizontal: rw(10) }}>
            <Skeleton width={rw(110)} height={rh(20)} colorMode="dark" />
          </View>
        ) : (
          <Text style={styles.title} numberOfLines={1} ellipsizeMode="tail">
            {item?.title_english ?? "unkonw"}
          </Text>
        )}

        {isLoading ? null : (
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
        )}
      </BlurView>
    </TouchableOpacity>
  );
}

function getStyles(from: fromType) {
  return StyleSheet.create({
    glass: {
      width: from == "Home" ? rw(133) : rw(114),
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
}

export default memo(ListItem);
