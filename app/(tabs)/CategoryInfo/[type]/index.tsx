import ArrowLeftIcon from "@/components/Icons/ArrowLeftIcon";
import ListAnmie from "@/components/List/index";
import { Colors, Fonts } from "@/constants/Colors";
import { useAnmieByCategory } from "@/hooks/GetAnmies";
import { rf, rh, rw } from "@/utils/dimensions";
import { useLocalSearchParams, useRouter } from "expo-router";
import React, { useRef } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function CategoryInfo() {
  const router = useRouter();
  const { type } = useLocalSearchParams();
  const Category = type ? (Array.isArray(type) ? type[0] : type) : null;
  const fristTwoTitle = useRef(Category?.slice(0, 2) ?? "");
  const afterTwoTitle = useRef(Category?.slice(2) ?? "");
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
        <View style={styles.titleContianer}>
          <Text style={styles.title}>{fristTwoTitle.current}</Text>
          <Text style={styles.sectitle}>{afterTwoTitle.current}</Text>
        </View>
      </View>
      <View style={{}}>
        <ListAnmie
          data={data?.pages?.flatMap((page) => page.data ?? []) ?? Array(9)}
          isLoading={isLoadingPage}
          from={"Category"}
          hasNextPage={hasNextPage}
          fetchNextPage={fetchNextPage}
        />
      </View>
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
  titleContianer: {
    flexDirection: "row",
    marginBottom: rh(20),
  },
});
