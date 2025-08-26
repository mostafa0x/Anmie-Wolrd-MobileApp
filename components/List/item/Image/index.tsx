import { AnmieType } from "@/types/store/AppSliceType";
import { rh, rw } from "@/utils/dimensions";
import { Image } from "expo-image";
import { Skeleton } from "moti/skeleton";
import React, { memo } from "react";
import { StyleSheet } from "react-native";

function Image_Item({
  isLoading,
  item,
  isHome,
}: {
  isLoading: boolean;
  item: AnmieType | null;
  isHome: boolean;
}) {
  return isLoading ? (
    <Skeleton
      width={isHome ? styles.imgHome.width : styles.img.width}
      height={styles.img.height}
      radius={rw(20)}
      colorMode="dark"
    />
  ) : (
    <Image
      style={[styles.img, isHome && styles.imgHome]}
      source={item?.images?.webp?.large_image_url ?? ""}
      cachePolicy="memory-disk"
    />
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
});

export default memo(Image_Item, (prev, next) => {
  return (
    prev.isLoading === next.isLoading &&
    prev.isHome === next.isHome &&
    prev.item?.mal_id === next.item?.mal_id
  );
});
