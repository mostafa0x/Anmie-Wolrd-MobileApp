import { Colors, Fonts } from "@/constants/Colors";
import { StateType } from "@/types/store/StateType";
import { rf, rh, rw } from "@/utils/dimensions";
import { useRouter } from "expo-router";
import React, { useRef } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useSelector } from "react-redux";
import ArrowRightIcon from "../Icons/ArrowRightIcon";
import ListAnmie from "../List";

interface props {
  title: string;
  isLoading: boolean;
}

export default function Categorys({ title, isLoading }: props) {
  const { upcomingAnime, ongoinggAnime } = useSelector(
    (state: StateType) => state.AppReducer
  );
  const currData = title == "upcoming" ? upcomingAnime : ongoinggAnime;
  const fristTwoTitle = useRef(title.slice(0, 2));
  const afterTwoTitle = useRef(title.slice(2));
  const router = useRouter();
  return (
    <View style={styles.Categorys}>
      <View style={styles.CategorysItem}>
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.mainText}>{fristTwoTitle.current}</Text>
          <Text style={styles.secText}>{afterTwoTitle.current}</Text>
        </View>
        <TouchableOpacity onPress={() => router.push(`/CategoryInfo/${title}`)}>
          <ArrowRightIcon
            width={rw(18)}
            height={rh(18)}
            iconColor={Colors.iconColor}
          />
        </TouchableOpacity>
      </View>
      <ListAnmie data={currData} isLoading={isLoading} from="Home" />
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
  secText: {
    fontFamily: Fonts.RoadRageRegular,
    fontSize: rf(48),
    color: Colors.secTextColor,
  },
});
