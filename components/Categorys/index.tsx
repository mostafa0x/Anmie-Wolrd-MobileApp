import { Colors, Fonts } from "@/constants/Colors";
import { useTopAnmie } from "@/hooks/useTopAnmie";
import { setCurrentError } from "@/lib/store/GlobalErrorSlice";
import { rf, rh, rw } from "@/utils/dimensions";
import { useRouter } from "expo-router";
import React, { useEffect, useRef } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useDispatch } from "react-redux";
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
  const dispatch = useDispatch();
  const { data, isLoading, isError, error } = useTopAnmie("/top/anime", filter);

  useEffect(() => {
    if (error) {
      console.log(error.name);

      dispatch(
        setCurrentError({
          header: "An error occurred",
          des: "Try Again",
          type: "noInternet",
        })
      );
    }
    return () => {};
  }, [error]);

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
        isLoading={isError ? true : isLoading}
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
