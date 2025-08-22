import ArrowLeftIcon from "@/components/Icons/ArrowLeftIcon";
import ListAnmie from "@/components/List/index";
import { Colors, Fonts } from "@/constants/Colors";
import { useAnmieByCategory } from "@/hooks/useAnmieByCategory";
import { rf, rh, rw } from "@/utils/dimensions";
import { useLocalSearchParams, useRouter } from "expo-router";
import React, { useEffect, useRef } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useDispatch } from "react-redux";

export default function CategoryInfo() {
  const router = useRouter();
  const { type } = useLocalSearchParams();
  const Category = type ? (Array.isArray(type) ? type[0] : type) : "";
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
  } = useAnmieByCategory(
    "/top/anime",
    Category == "ongoing"
      ? "airing"
      : Category == "Popularity"
      ? "bypopularity"
      : Category ?? "empty"
  );
  const flatData = data?.pages.flatMap((page) => page?.data ?? []) ?? Array(9);
  const dispatch = useDispatch();
  useEffect(() => {
    return () => {
      // dispatch(setLastAnmieIndex(null));
    };
  }, []);

  function handleBack() {
    if (!router) return;
    if (router.canGoBack()) {
      router.back();
    } else {
      router.replace("/");
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.appBar}>
        <TouchableOpacity style={styles.icon} onPress={() => handleBack()}>
          <ArrowLeftIcon />
        </TouchableOpacity>
        <View style={styles.titleContianer}>
          <Text style={styles.title}>{fristTwoTitle.current}</Text>
          <Text style={styles.sectitle}>{afterTwoTitle.current}</Text>
        </View>
      </View>
      <View style={{}}>
        <ListAnmie
          data={flatData}
          isLoading={isLoading}
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
  },
  icon: {
    paddingTop: rh(20),
  },
});
