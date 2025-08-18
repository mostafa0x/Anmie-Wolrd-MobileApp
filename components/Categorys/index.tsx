import { Colors, Fonts } from "@/constants/Colors";
import { StateType } from "@/types/store/StateType";
import { rf, rh, rw } from "@/utils/dimensions";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";
import ArrowRightIcon from "../Icons/ArrowRightIcon";
import ListAnmie from "../List";

interface props {
  title: string;
}

export default function Categorys({ title }: props) {
  const { upcomingAnime, ongoinggAnime } = useSelector(
    (state: StateType) => state.AppReducer
  );
  const currData = title == "upcoming" ? upcomingAnime : ongoinggAnime;
  return (
    <View style={styles.Categorys}>
      <View style={styles.CategorysItem}>
        <Text style={styles.mainText}>{title}</Text>
        <ArrowRightIcon width={rw(18)} height={rh(18)} />
      </View>
      <ListAnmie data={currData} />
    </View>
  );
}

const styles = StyleSheet.create({
  Categorys: {
    marginTop: rh(32),
    height: "auto",
  },

  CategorysItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: rw(19),
  },
  mainText: {
    fontFamily: Fonts.RoadRageRegular,
    fontSize: rf(48),
    color: Colors.textColor,
  },
});
