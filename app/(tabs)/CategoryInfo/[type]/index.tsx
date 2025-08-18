import ArrowLeftIcon from "@/components/Icons/ArrowLeftIcon";
import List from "@/components/List";
import { Colors, Fonts } from "@/constants/Colors";
import { rf, rh, rw } from "@/utils/dimensions";
import { useLocalSearchParams, useRouter } from "expo-router";
import React, { useRef } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function CategoryInfo() {
  const router = useRouter();
  const { type } = useLocalSearchParams();
  const fristTwoTitle = useRef(type.slice(0, 2));
  const afterTwoTitle = useRef(type.slice(2));
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
        <List data={[1, 2, 3, 4, 5]} isLoading={true} from={"Category"} />
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
