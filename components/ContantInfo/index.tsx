import { Fonts } from "@/constants/Colors";
import { AnmieType } from "@/types/store/AppSliceType";
import { rf, rh, rw } from "@/utils/dimensions";
import { Skeleton } from "moti/skeleton";
import React, { memo } from "react";
import { StyleSheet, Text, View } from "react-native";
import DurationIcon from "../Icons/DurationIcon";
import LoveIcon from "../Icons/LoveIcon";
import RankIcon from "../Icons/RankIcon";
import StarIcon from "../Icons/StarIcon";

function Contant_Info({ item }: { item: AnmieType | null }) {
  return item?.mal_id ? (
    <View style={styles.ContainerContant}>
      <View style={styles.fristRow}>
        <Text style={styles.status}>
          {item?.status == "Currently Airing"
            ? "ongoing"
            : item?.status == "Finished Airing"
            ? "Completed"
            : "Upcoming"}
        </Text>
        <Text style={styles.titles}>
          episodes : {item?.episodes ?? "unknow"}
        </Text>
        <Text style={styles.titles}>
          From : {item?.aired?.from?.split("T")[0] ?? ""}
        </Text>
        <Text style={styles.titles}>
          To : {item?.aired?.to?.split("T")[0] ?? "unknow"}
        </Text>
      </View>
      <View style={styles.secRow}>
        <View style={styles.secRowContant}>
          <Text style={styles.Score}>{item?.score ?? "unknow"}</Text>
          <StarIcon width={rw(30)} height={rh(30)} />
        </View>
        <View style={styles.secRowContant}>
          <Text style={styles.secRowtitles}>{item?.duration}</Text>
          <DurationIcon />
        </View>
        <View style={styles.secRowContant}>
          <Text style={styles.secRowtitles}>{item?.rank ?? "unknow"}</Text>
          <RankIcon />
        </View>
        <View style={styles.secRowContant}>
          <Text style={styles.secRowtitles}>{item?.favorites}</Text>
          <LoveIcon />
        </View>
      </View>
    </View>
  ) : (
    <Skeleton width={rw(200)} height={rh(200)} />
  );
}

const styles = StyleSheet.create({
  ContainerContant: {
    paddingHorizontal: rw(8),
    marginTop: rh(25),
    justifyContent: "space-between",
    flexDirection: "row",
    paddingBottom: rh(13),
  },
  fristRow: {
    marginTop: rh(10),
    gap: rh(11),
  },
  secRow: {
    marginTop: rh(10),
    gap: rh(11),
  },
  status: {
    fontFamily: Fonts.RoadRageRegular,
    fontSize: rf(32),
    color: "#D68006",
  },
  Score: {
    fontFamily: Fonts.RoadRageRegular,
    fontSize: rf(32),
    color: "#fff",
  },
  titles: {
    fontFamily: Fonts.RoadRageRegular,
    fontSize: rf(24),
    color: "#fff",
    textAlign: "left",
  },
  secRowtitles: {
    fontFamily: Fonts.RoadRageRegular,
    fontSize: rf(24),
    color: "#fff",
    textAlign: "right",
  },
  secRowContant: {
    gap: rw(3),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
  },
});

export default memo(Contant_Info);
