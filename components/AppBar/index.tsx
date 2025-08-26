import { Colors, Fonts } from "@/constants/Colors";
import { rf, rh, rw } from "@/utils/dimensions";
import { useRouter } from "expo-router";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import ArrowLeftIcon from "../Icons/ArrowLeftIcon";

export default function AppBar({
  title = "empty",
  statusType,
  genresTitle,
}: {
  title: string;
  statusType?: string;
  genresTitle?: string;
}) {
  const router = useRouter();
  const firstTitle = title.split(" ").splice(0, 1).join(" ");
  const restTitle = title.split(" ").slice(1).join(" ");

  function handleBack() {
    if (!router) return;
    if (router.canGoBack()) {
      router.back();
    } else {
      router.replace("/");
    }
  }
  return (
    <View style={styles.appBar}>
      <TouchableOpacity onPress={() => handleBack()}>
        <ArrowLeftIcon />
      </TouchableOpacity>

      <View style={styles.titleContiner}>
        <Text
          numberOfLines={1}
          adjustsFontSizeToFit
          minimumFontScale={0.7}
          ellipsizeMode="tail"
          style={styles.title}
        >
          <Text style={styles.title}>{firstTitle} </Text>
          <Text style={styles.sectitle}>{restTitle}</Text>
          {statusType ||
            (genresTitle && (
              <Text
                adjustsFontSizeToFit
                minimumFontScale={0.8}
                style={styles.fillterTitle}
                numberOfLines={1}
              >
                <Text style={styles.statusType}>{statusType}</Text>
                {statusType && genresTitle && (
                  <Text style={styles.statusType}> + </Text>
                )}
                <Text style={styles.statusType}>{genresTitle}</Text>
              </Text>
            ))}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appBar: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: rw(20),
    gap: rw(24),
    marginTop: rh(10),
  },
  title: {
    fontFamily: Fonts.RoadRageRegular,
    fontSize: rf(48),
    color: Colors.textColor,
  },
  sectitle: {
    fontFamily: Fonts.RoadRageRegular,
    fontSize: rf(48),
    color: Colors.secTextColor,
  },
  statusType: {
    fontFamily: Fonts.RoadRageRegular,
    fontSize: rf(24),
    color: "#dbce13",
  },
  titleContiner: {
    flexDirection: "row",
    marginBottom: rh(0),
    flexShrink: 1,
  },
  fillterTitle: {
    flexDirection: "row",
    marginBottom: rh(0),
    flexShrink: 1,
  },
});
