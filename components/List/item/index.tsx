import GlassView from "@/components/GlassView";
import LoveIcon from "@/components/Icons/LoveIcon";
import StarIcon from "@/components/Icons/StarIcon";
import { Colors, Fonts } from "@/constants/Colors";
import { setLastAnmieIndex } from "@/lib/store/AppSlice";
import { AnmieType } from "@/types/store/AppSliceType";
import { rf, rh, rw } from "@/utils/dimensions";
import { Image } from "expo-image";
import { useRouter } from "expo-router";
import { Skeleton } from "moti/skeleton";
import React, { memo } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useDispatch } from "react-redux";
import { fromType } from "..";

function ListItem({
  item,
  isLoading,
  from,
  index,
}: {
  item: AnmieType | null;
  isLoading: boolean;
  from: fromType;
  index: number;
}) {
  const isHome = from == "Home";
  const styles = getStyles(from, isHome);
  const img = { uri: item?.images?.webp?.large_image_url };

  const router = useRouter();
  const disPatch = useDispatch();

  return (
    <TouchableOpacity
      onPress={() => {
        if (!isLoading) {
          disPatch(setLastAnmieIndex(index));
          router.push({
            pathname: `/AnmieInfo/${item?.mal_id}` as any,
            params: {
              anmie: JSON.stringify(item),
            },
          });
        }
      }}
    >
      <GlassView calledFrom={from}>
        {isLoading ? (
          <Skeleton
            width={styles.img.width}
            height={styles.img.height}
            radius={rw(20)}
            colorMode="dark"
          />
        ) : (
          <Image style={styles.img} source={img} />
        )}
        {isLoading ? (
          <View style={{ marginTop: rh(20), paddingHorizontal: rw(10) }}>
            <Skeleton
              width={isHome ? rw(110) : rw(90)}
              height={rh(20)}
              colorMode="dark"
            />
          </View>
        ) : (
          <Text style={styles.title} numberOfLines={1} ellipsizeMode="tail">
            {item?.title_english ?? "unkonw"}
          </Text>
        )}

        {isLoading ? null : (
          <View style={styles.info}>
            <View style={styles.infoMin}>
              <Text style={styles.infoTxt}>{item?.favorites ?? "unknow"}</Text>
              <LoveIcon width={rw(16)} height={rh(16)} />
            </View>
            <View style={styles.infoMin}>
              <Text style={styles.infoTxt}>{item?.score ?? "unknow"}</Text>
              <StarIcon width={rw(20)} height={rh(20)} />
            </View>
          </View>
        )}
      </GlassView>
    </TouchableOpacity>
  );
}

function getStyles(from: fromType, isHome: boolean) {
  return StyleSheet.create({
    img: {
      width: isHome ? rw(132) : rw(113),
      height: rh(134),
      borderRadius: rw(20),
    },
    title: {
      fontFamily: Fonts.RoadRageRegular,
      color: Colors.textColor,
      fontSize: rf(30),
      paddingLeft: rw(7),
      width: isHome ? rw(130) : rw(115),
    },
    info: {
      flexDirection: "row",
      justifyContent: "space-between",
      paddingHorizontal: rw(12),
    },
    infoTxt: {
      fontFamily: Fonts.RoadRageRegular,
      fontSize: rf(16),
      color: Colors.textColor,
    },
    infoMin: {
      flexDirection: "row",
      alignItems: "center",
      gap: rw(3),
    },
  });
}

export default memo(ListItem);
