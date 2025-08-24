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
  const disPatch = useDispatch();
  const router = useRouter();
  const isHome = from == "Home";

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
            width={isHome ? styles.imgHome.width : styles.img.width}
            height={styles.img.height}
            radius={rw(20)}
            colorMode="dark"
          />
        ) : (
          <Image
            style={[styles.img, isHome && styles.imgHome]}
            source={item?.images?.webp?.large_image_url}
          />
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
          <Text
            style={[styles.title, isHome && styles.titleHome]}
            numberOfLines={1}
            ellipsizeMode="tail"
          >
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

const styles = StyleSheet.create({
  img: {
    width: rw(113),
    height: rh(134),
    borderRadius: rw(20),
  },
  imgHome: {
    width: rw(132),
  },
  title: {
    fontFamily: Fonts.RoadRageRegular,
    color: Colors.textColor,
    fontSize: rf(30),
    paddingLeft: rw(7),
    width: rw(115),
  },
  titleHome: {
    width: rw(130),
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

export default memo(ListItem);
