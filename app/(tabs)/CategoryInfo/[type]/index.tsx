import ArrowLeftIcon from "@/components/Icons/ArrowLeftIcon";
import ListAnmie from "@/components/List/index";
import { Colors, Fonts } from "@/constants/Colors";
import { useAnmieByCategory } from "@/hooks/GetUpComingAnmie";
import { StateType } from "@/types/store/StateType";
import { rf, rh, rw } from "@/utils/dimensions";
import { useLocalSearchParams, useRouter } from "expo-router";
import React, { useRef } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useSelector } from "react-redux";

export default function CategoryInfo() {
  const router = useRouter();
  const { type } = useLocalSearchParams();
  const fristTwoTitle = useRef(type.slice(0, 2));
  const afterTwoTitle = useRef(type.slice(2));
  const { upcomingAnime } = useSelector((state: StateType) => state.AppReducer);
  const {
    data,
    hasNextPage,
    fetchNextPage,
    isLoading,
    isFetching,
    error,
    isError,
  } = useAnmieByCategory("/anime", "upcoming");
  const isLoadingPage = isLoading && isFetching;

  return (
    <View style={styles.container}>
      <View style={styles.appBar}>
        <TouchableOpacity onPress={() => router.back()}>
          <ArrowLeftIcon />
        </TouchableOpacity>
        <View style={{ flexDirection: "row", marginBottom: rh(20) }}>
          <Text style={styles.title}>{fristTwoTitle.current}</Text>
          <Text style={styles.sectitle}>{afterTwoTitle.current}</Text>
        </View>
      </View>
      <View style={{}}>
        <ListAnmie
          data={
            data?.pages?.flatMap((page) => page.data ?? []) ?? [1, 2, 3, 4, 5]
          }
          isLoading={isLoadingPage}
          from={"Category"}
          hasNextPage={hasNextPage}
          fetchNextPage={fetchNextPage}
        />
      </View>
      <Text>index {type}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  appBar: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: rw(20),
    gap: rw(24),
  },
  title: {
    fontFamily: Fonts.RoadRageRegular,
    fontSize: rf(72),
    color: Colors.textColor,
  },
  sectitle: {
    fontFamily: Fonts.RoadRageRegular,
    fontSize: rf(72),
    color: Colors.secTextColor,
  },
});
