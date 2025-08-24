import AnmieCard from "@/components/AnmieCard";
import CharactersList from "@/components/CharactersList";
import ArrowLeftIcon from "@/components/Icons/ArrowLeftIcon";
import NotFoundAnmie from "@/components/NotFoundAnmie";
import VideoPlayer from "@/components/VideoPlayer";
import { Colors, Fonts } from "@/constants/Colors";
import { AnmieType } from "@/types/store/AppSliceType";
import { rf, rh, rw } from "@/utils/dimensions";
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
          <AnmieCard item={item} />
          <View style={styles.descContiner}>
            <View>
              <Text style={styles.Synopsis}>Synopsis</Text>
            </View>
            <Text style={styles.decTxt}>
              {item?.synopsis ?? "There is no Synopsis yet."}
            </Text>
          </View>
          <View style={styles.playerContinaer}>
            <VideoPlayer ref={playerRef} item={item} />
          </View>
          <View style={styles.CharactersList}>
            <View>
              <Text style={styles.Synopsis}>Characters & Voice Actors</Text>
            </View>
            <CharactersList item={item} />
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

  contantContainer: {
    paddingHorizontal: rw(19),
  },
  glassContiner: {
    marginTop: rh(223),
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
  CharactersList: {
    marginTop: rh(50),
    height: "auto",
    borderBottomWidth: 1,
    borderColor: "rgba(255,255,255,0.3)",
  },
});
