import ArrowRightIcon from "@/components/Icons/ArrowRightIcon";
import SerachIcon from "@/components/Icons/SerachIcon";
import ListItem from "@/components/List/item";
import { Colors, Fonts } from "@/constants/Colors";
import { rf, rh, rw } from "@/utils/dimensions";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function HomeScreen() {
  return (
    <LinearGradient
      colors={["#FB0909", "#570101"]}
      locations={[0, 1]}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={styles.container}
    >
      {/*Hader */}
      <View style={styles.appBar}>
        <View>
          <Image
            contentFit="contain"
            style={styles.title}
            source={require("@/assets/images/title.png")}
          />
        </View>
        <SerachIcon width={rw(35)} height={rh(35)} />
      </View>
      {/*silder */}
      <View style={styles.silderContainer}>
        <Image
          style={styles.sliderImg}
          source={require("@/assets/images/test.png")}
        />
      </View>
      {/*upcoming List */}
      <View style={styles.Categorys}>
        <View style={styles.CategorysItem}>
          <Text style={styles.mainText}>upcoming</Text>
          <ArrowRightIcon width={rw(18)} height={rh(18)} />
        </View>
        {/* <FlashList
          data={[1, 2, 3]}
          estimatedItemSize={100}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => <ListItem />}
        /> */}
        <View style={{ flexDirection: "row", gap: rw(15) }}>
          <ListItem />
          <ListItem />
          <ListItem />
        </View>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    zIndex: 1,
    paddingHorizontal: rw(19),
  },
  appBar: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    width: rw(217),
    height: rh(70),
  },
  silderContainer: {
    width: rw(352),
    height: rh(221),
    marginTop: rh(19),
  },
  sliderImg: {
    width: "100%",
    height: "100%",
    borderRadius: rw(20),
  },
  Categorys: {
    marginTop: rh(32),
  },
  CategorysItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  mainText: {
    fontFamily: Fonts.RoadRageRegular,
    fontSize: rf(48),
    color: Colors.textColor,
  },
});
