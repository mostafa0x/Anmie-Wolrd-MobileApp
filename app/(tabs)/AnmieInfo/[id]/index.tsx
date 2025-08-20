import Contant_Info from "@/components/ContantInfo";
import GlassView from "@/components/GlassView";
import ArrowLeftIcon from "@/components/Icons/ArrowLeftIcon";
import { Colors, Fonts } from "@/constants/Colors";
import { AnmieType } from "@/types/store/AppSliceType";
import { rf, rh, rw } from "@/utils/dimensions";
import { Image } from "expo-image";
import { useLocalSearchParams, useRouter } from "expo-router";
import React, { useEffect } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
interface props {
  anmie: AnmieType;
}

export default function AnmieInfo({}: props) {
  const { anmie } = useLocalSearchParams();
  const item: AnmieType = JSON.parse(Array.isArray(anmie) ? anmie[0] : anmie);
  const title = (item.title_english ?? "").split(" ");
  const firstTitle = title[0] ?? "";
  const restTitle = title.slice(1).join(" ");
  const router = useRouter();

  useEffect(() => {
    console.log(item);

    return () => {};
  }, [anmie]);

  return (
    <View>
      <View style={styles.appBar}>
        <TouchableOpacity onPress={() => router.back()}>
          <ArrowLeftIcon />
        </TouchableOpacity>
        <View style={{ flexDirection: "row", marginBottom: rh(20) }}>
          <Text style={styles.title}>{firstTitle} </Text>
          <Text numberOfLines={1} ellipsizeMode="tail" style={styles.sectitle}>
            {restTitle}
          </Text>
        </View>
      </View>
      <View style={styles.contantContainer}>
        <View>
          <View style={styles.imgContanier}>
            <Image
              style={styles.img}
              source={{ uri: item.images.webp.large_image_url }}
            />
          </View>
          <View style={styles.glassContiner}>
            <GlassView calledFrom="any">
              <Contant_Info item={item} />
            </GlassView>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appBar: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: rw(20),
    gap: rw(24),
  },
  title: {
    fontFamily: Fonts.RoadRageRegular,
    fontSize: rf(48),
    color: Colors.textColor,
  },
  sectitle: {
    fontFamily: Fonts.RoadRageRegular,
    fontSize: rf(48),
    color: Colors.secTextColor,
    width: rw(220),
  },
  imgContanier: {
    width: rw(352),
    height: rh(221),
    marginTop: rh(4),
    position: "absolute",
    top: rh(0),
  },
  img: {
    width: "100%",
    height: "100%",
    borderRadius: rw(10),
  },
  contantContainer: {
    paddingHorizontal: rw(19),
  },
  glassContiner: {
    marginTop: rh(187),
    zIndex: -1,
  },
});
