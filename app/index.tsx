import Categorys from "@/components/Categorys";
import SerachIcon from "@/components/Icons/SerachIcon";
import Slider from "@/components/Slider";
import { Colors } from "@/constants/Colors";
import { axiosClient } from "@/lib/api/axiosClient";
import { setUpcomingAnime } from "@/lib/store/AppSlice";
import { StateType } from "@/types/store/StateType";
import { rh, rw } from "@/utils/dimensions";
import { Image } from "expo-image";
import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";

export default function HomeScreen() {
  const dispatch = useDispatch();
  const { isScrolling } = useSelector((state: StateType) => state.AppReducer);
  const [isLoadingUpcoming, setIsLoadingUpcoming] = useState(true);

  useEffect(() => {
    const CallApi = async () => {
      try {
        const res = await axiosClient.get("/top/anime?filter=upcoming&limit=5");
        dispatch(setUpcomingAnime(res.data.data));
        setIsLoadingUpcoming(false);
      } catch (err: any) {
        console.log(err);
        setIsLoadingUpcoming(true);
      }
    };
    CallApi();
  }, []);

  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1, paddingBottom: rh(100) }}
      showsVerticalScrollIndicator={false}
      scrollEnabled={isScrolling}
    >
      {/*appBar */}
      <View style={styles.appBar}>
        <Image
          contentFit="contain"
          style={styles.title}
          source={require("@/assets/images/title.png")}
        />
        <SerachIcon
          width={rw(35)}
          height={rh(35)}
          iconColor={Colors.iconColor}
        />
      </View>
      {/*slider */}
      <Slider />
      {/* Lists */}
      <Categorys title="upcoming" isLoading={isLoadingUpcoming} />
      <Categorys title="upcoming" isLoading={isLoadingUpcoming} />

      <Categorys title="upcoming" isLoading={isLoadingUpcoming} />

      {/* <Categorys title="ongoing" isLoading={isLoadingUpcoming} />
      <Categorys title="complete" isLoading={isLoadingUpcoming} /> */}
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
