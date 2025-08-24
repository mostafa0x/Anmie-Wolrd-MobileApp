import { AnmieType } from "@/types/store/AppSliceType";
import { rh, rw } from "@/utils/dimensions";
import { Image } from "expo-image";
import { Skeleton } from "moti/skeleton";
import React, { memo, useRef, useState } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { YoutubeIframeRef } from "react-native-youtube-iframe";
import ContantInfo from "../ContantInfo";
import GlassView from "../GlassView";
import LoveBtnIcon from "../Icons/LoveBtnIcon";

function AnmieCard({ item }: { item: AnmieType | null }) {
  const playerRef = useRef<YoutubeIframeRef>(null);
  const [isLoadingImg, setisLoadingImg] = useState(true);
  return (
    <View>
      <View style={styles.imgContanier}>
        <Skeleton radius={rw(20)} show={isLoadingImg}>
          <Image
            style={styles.img}
            contentFit="fill"
            transition={100}
            onLoadStart={() => setisLoadingImg(true)}
            onLoadEnd={() => setisLoadingImg(false)}
            source={{ uri: item?.images?.webp?.large_image_url ?? "" }}
          />
        </Skeleton>
        <View style={{ position: "absolute", top: rh(0), right: rw(0) }}>
          <TouchableOpacity>
            <LoveBtnIcon isMyFav={false} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.glassContiner}>
        <GlassView type={1} calledFrom="any">
          <ContantInfo item={item ?? null} />
        </GlassView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  imgContanier: {
    width: rw(352),
    height: rh(410),
    marginTop: rh(4),
    top: rh(10),
    left: rw(0),
    position: "absolute",
  },
  img: {
    width: "100%",
    height: "100%",
    borderRadius: rw(20),
  },

  glassContiner: {
    marginTop: rh(223),
  },

  titleContiner: { flexDirection: "row", marginBottom: rh(0), flexShrink: 1 },
});

export default memo(AnmieCard);
