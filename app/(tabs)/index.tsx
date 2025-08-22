import Categorys from "@/components/Categorys";
import MenuIcon from "@/components/Icons/MenuIcon";
import SerachIcon from "@/components/Icons/SerachIcon";
import Slider from "@/components/Slider";
import { Colors } from "@/constants/Colors";
import { setLastAnmieIndex } from "@/lib/store/AppSlice";
import { StateType } from "@/types/store/StateType";
import { rh, rw } from "@/utils/dimensions";
import { Image } from "expo-image";
import { router } from "expo-router";
import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";

export default function HomeScreen() {
  const dispatch = useDispatch();
  const { isScrolling } = useSelector((state: StateType) => state.AppReducer);
  const [isLoadingUpcoming, setIsLoadingUpcoming] = useState(true);

  useEffect(() => {
    dispatch(setLastAnmieIndex(null));
  }, []);

  return (
    <ScrollView
      contentContainerStyle={{
        flexGrow: 1,
        paddingBottom: rh(100),
      }}
      showsVerticalScrollIndicator={false}
      scrollEnabled={isScrolling}
    >
      {/*appBar */}
      <View style={styles.appBar}>
        <TouchableOpacity onPress={() => router.push("/Menu/page")}>
          <MenuIcon width={rw(35)} height={rh(35)} />
        </TouchableOpacity>
        <Image
          contentFit="contain"
          style={styles.title}
          source={require("@/assets/images/title.png")}
        />
        <TouchableOpacity onPress={() => router.push("/Serach")}>
          <SerachIcon
            width={rw(35)}
            height={rh(35)}
            iconColor={Colors.iconColor}
          />
        </TouchableOpacity>
      </View>
      <Slider />
      <Categorys title="upcoming" filter="upcoming" />
      <Categorys title="Popularity" filter="bypopularity" />
      <Categorys title="ongoing" filter="airing" />
      <Categorys title="favorite" filter="favorite" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  appBar: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: rw(19),
  },
  title: {
    width: rw(217),
    height: rh(70),
  },
});
