import GlassView from "@/components/GlassView";
import { Colors, Fonts } from "@/constants/Colors";
import { AnmieType } from "@/types/store/AppSliceType";
import { rf, rh, rw } from "@/utils/dimensions";
import { Image } from "expo-image";
import { useRouter } from "expo-router";
import { Skeleton } from "moti/skeleton";
import React, { memo } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { fromType } from "..";
import Info_Item from "./info";

function ListItem({
  item,
  isLoading,
  from,
}: {
  item: AnmieType | null;
  isLoading: boolean;
  from: fromType;
}) {
  const router = useRouter();
  const isHome = from == "Home";

  return (
    <TouchableOpacity
      onPress={() => {
        if (!isLoading) {
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
            cachePolicy="memory-disk"
          />
        )}
        {isLoading ? (
          <View style={styles.skeltionTxt}>
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

        {isLoading ? null : <Info_Item item={item} />}
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

  skeltionTxt: { marginTop: rh(20), paddingHorizontal: rw(10) },
});

export default memo(ListItem, (prev, next) => {
  return (
    prev.isLoading === next.isLoading &&
    prev.from === next.from &&
    prev.item?.mal_id === next.item?.mal_id
  );
});
