import { Colors, Fonts } from "@/constants/Colors";
import { AnmieType, genresType } from "@/types/store/AppSliceType";
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
    <View style={{ flex: 1 }}>
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
      <View style={styles.cards}>
        {item.genres.map((genre, index) => {
          return index > 2 ? null : <Card genre={genre} key={index} />;
        })}
      </View>
    </View>
  ) : (
    <Skeleton width={rw(200)} height={rh(200)} />
  );
}

const Card = ({ genre }: { genre: genresType }) => {
  return (
    <View style={styles.cardContainer}>
      <Text style={styles.cardTitle}>{genre.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  ContainerContant: {
    paddingHorizontal: rw(8),
    marginTop: rh(5),
    justifyContent: "space-between",
    flexDirection: "row",
  },
  fristRow: {
    marginTop: rh(1),
    gap: rh(11),
  },
  secRow: {
    marginTop: rh(1),
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
    color: Colors.textColor,
  },
  titles: {
    fontFamily: Fonts.RoadRageRegular,
    fontSize: rf(24),
    color: Colors.textColor,
    textAlign: "left",
  },
  secRowtitles: {
    fontFamily: Fonts.RoadRageRegular,
    fontSize: rf(24),
    color: Colors.textColor,
    textAlign: "right",
  },
  secRowContant: {
    gap: rw(3),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  cards: {
    paddingHorizontal: rw(10),
    paddingVertical: rh(10),
    flexDirection: "row",
    justifyContent: "flex-start",
    flexWrap: "wrap",
  },
  cardContainer: {
    width: "30%",
    backgroundColor: "#02081db2",

    borderRadius: rw(20),
    marginLeft: rw(10),
  },
  cardTitle: {
    fontFamily: Fonts.RoadRageRegular,
    fontSize: rf(20),
    color: Colors.textColor,
    textAlign: "center",
  },
});

export default memo(Contant_Info);
