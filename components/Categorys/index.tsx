import { Colors, Fonts } from "@/constants/Colors";
import { useTopAnmie } from "@/hooks/useTopAnmie";
import { rf, rh, rw } from "@/utils/dimensions";
import { useRouter } from "expo-router";
import React, { useRef } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import ArrowRightIcon from "../Icons/ArrowRightIcon";
import ListAnmie from "../List";

interface props {
  title: string;
  filter: string;
}

export default function Categorys({ title, filter }: props) {
  const fristTwoTitle = useRef(title.slice(0, 2));
  const afterTwoTitle = useRef(title.slice(2));
  const router = useRouter();

  const { data, isLoading, isError, error } = useTopAnmie("/top/anime", filter);

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
      <ListAnmie
        data={data?.data ?? Array(5)}
        isLoading={isLoading}
        from="Home"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  Categorys: {
    marginTop: rh(32),
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
