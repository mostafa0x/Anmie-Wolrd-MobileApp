import LoveIcon from "@/components/Icons/LoveIcon";
import StarIcon from "@/components/Icons/StarIcon";
import { Colors, Fonts } from "@/constants/Colors";
import { AnmieType } from "@/types/store/AppSliceType";
import { rf, rh, rw } from "@/utils/dimensions";
import React, { memo } from "react";
import { StyleSheet, Text, View } from "react-native";

function Info_Item({ item }: { item: AnmieType | null }) {
  return (
    <View style={styles.info}>
      <View style={styles.infoMin}>
        <Text style={styles.infoTxt}>{item?.favorites ?? "unknow"}</Text>
        <LoveIcon width={rw(16)} height={rh(16)} />
      </View>
      <View style={styles.infoMin}>
        <Text style={styles.infoTxt}>{item?.score ?? "unknow"}</Text>
        <StarIcon width={rw(20)} height={rh(20)} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
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

export default memo(Info_Item, (prev, next) => {
  return prev.item?.mal_id === next.item?.mal_id;
});
