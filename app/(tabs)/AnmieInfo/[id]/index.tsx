import Contant_Info from "@/components/ContantInfo";
import GlassView from "@/components/GlassView";
import ArrowLeftIcon from "@/components/Icons/ArrowLeftIcon";
import LoveBtnIcon from "@/components/Icons/LoveBtnIcon";
import NotFoundAnmie from "@/components/NotFoundAnmie";
import VideoPlayer from "@/components/VideoPlayer";
import { Colors, Fonts } from "@/constants/Colors";
import { AnmieType } from "@/types/store/AppSliceType";
import { rf, rh, rw } from "@/utils/dimensions";
import { Image } from "expo-image";
import { useLocalSearchParams, useRouter } from "expo-router";
import { ScrollView } from "moti";
import React, { useRef } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { YoutubeIframeRef } from "react-native-youtube-iframe";

interface props {
  anmie: AnmieType;
}

export default function AnmieInfo({}: props) {
  const { anmie } = useLocalSearchParams();
  const item: AnmieType | null = anmie
    ? JSON.parse(Array.isArray(anmie) ? anmie[0] : anmie)
    : null;
  const title = (item?.title_english ?? "Unknow").split(" ");
  const firstTitle = item?.title_english ? title[0] ?? "" : title;
  const restTitle = item?.title_english ? title.slice(1).join(" ") : "";
  const router = useRouter();
  const playerRef = useRef<YoutubeIframeRef>(null);

  function handleBack() {
    if (!router) return;
    if (router.canGoBack()) {
      router.back();
    } else {
      router.replace("/(tabs)/index" as any);
    }
  }

  return item?.mal_id ? (
    <ScrollView contentContainerStyle={{ paddingBottom: rh(30) }}>
      <View style={styles.appBar}>
        <TouchableOpacity onPress={() => handleBack()}>
          <ArrowLeftIcon />
        </TouchableOpacity>

        <View style={styles.titleContiner}>
          <Text
            numberOfLines={1}
            adjustsFontSizeToFit
            minimumFontScale={0.5}
            ellipsizeMode="tail"
            style={styles.title}
          >
            <Text style={styles.title}>{firstTitle} </Text>
            <Text style={styles.sectitle}>{restTitle}</Text>
          </Text>
        </View>
      </View>
      <View style={styles.contantContainer}>
        <View>
          <View style={styles.imgContanier}>
            <Image
              style={styles.img}
              contentFit="fill"
              transition={100}
              source={{ uri: item?.images?.webp?.image_url ?? "" }}
            />
            <View style={{ position: "absolute", top: rh(0), right: rw(0) }}>
              <TouchableOpacity>
                <LoveBtnIcon isMyFav={false} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.glassContiner}>
            <GlassView type={1} calledFrom="any">
              <Contant_Info item={item ?? null} />
            </GlassView>
          </View>
          <View style={styles.descContiner}>
            <View>
              <Text style={styles.Synopsis}>Synopsis</Text>
            </View>
            <Text style={styles.decTxt}>{item?.synopsis ?? ""}</Text>
          </View>
          <View style={styles.playerContinaer}>
            <VideoPlayer ref={playerRef} item={item} />
          </View>
        </View>
      </View>
    </ScrollView>
  ) : (
    <NotFoundAnmie />
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
  contantContainer: {
    paddingHorizontal: rw(19),
  },
  glassContiner: {
    marginTop: rh(220),
  },
  descContiner: {
    marginTop: rh(19),
  },
  decTxt: {
    fontFamily: Fonts.RoadRageRegular,
    fontSize: rf(20),
    color: Colors.textColor,
    borderBottomWidth: 1,
    borderColor: "rgba(255,255,255,0.3)",
    paddingBottom: rh(10),
  },
  playerContinaer: {
    marginTop: rh(25),
    borderRadius: rw(20),
  },
  titleContiner: { flexDirection: "row", marginBottom: rh(0), flexShrink: 1 },
  Synopsis: {
    fontFamily: Fonts.RoadRageRegular,
    fontSize: rf(32),
    color: Colors.textColor,
    borderBottomWidth: 1,
    borderColor: "rgba(255,255,255,0.7)",

    marginBottom: rh(10),
  },
  btnLove: {},
});
