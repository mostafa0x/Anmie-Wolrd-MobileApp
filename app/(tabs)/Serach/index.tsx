import Categorys from "@/components/Categorys";
import GenresContainer from "@/components/GenresContainer";
import { Colors, Fonts } from "@/constants/Colors";
import { GenresTypes } from "@/types/GenresTypes";
import { rf, rh, rw } from "@/utils/dimensions";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button, Searchbar, SegmentedButtons } from "react-native-paper";

export default function Serach() {
  const [statusValue, setStatusValue] = useState("");
  const [genresValue, setGenresValue] = useState<GenresTypes>("");
  const [q, setq] = useState("");
  const btns = [
    {
      value: "airing",
      label: "ongoing",
    },
    {
      value: "complete",
      label: "complete",
    },
    { value: "upcoming", label: "upcoming" },
  ];

  const router = useRouter();

  function SerachByText() {
    if (q.trim() == "") return;
    router.push({
      pathname: "/SearchResults",
      params: { q, status: statusValue, genresValue },
    });
  }
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text numberOfLines={3} style={styles.headerTxt}>
          <Text style={styles.headerTxt}>What are you </Text>
          <Text style={styles.secTxt}>looking for </Text>
          <Text style={styles.headerTxt}>?</Text>
        </Text>
        <Text style={styles.desTxt}>Serach for Anmie of your interest</Text>
      </View>
      <View style={styles.serachContainer}>
        <Searchbar
          inputStyle={styles.Searchbar}
          value={q}
          onChangeText={setq}
          placeholderTextColor={"rgba(0,0,0,0.5)"}
          style={{ backgroundColor: "white" }}
          placeholder="Search"
          onSubmitEditing={SerachByText}
          onIconPress={SerachByText}
        />
      </View>
      <View style={styles.fillterContainer}>
        <SegmentedButtons
          value={statusValue}
          onValueChange={(v) =>
            v == statusValue ? setStatusValue("") : setStatusValue(v)
          }
          buttons={btns.map((btn) => ({
            style: {
              backgroundColor:
                statusValue == btn.value ? Colors.iconColor : "rgba(0,0,0,0.2)",
            },
            labelStyle: styles.lableFillter,
            value: btn.value,
            label: btn.label.charAt(0).toLocaleUpperCase() + btn.label.slice(1),
          }))}
        />
        <GenresContainer
          genresValue={genresValue}
          setGenresValue={setGenresValue}
        />
      </View>
      <View style={styles.Categorys}>
        <Categorys title="Popularity" filter="bypopularity" />
      </View>
      <View style={styles.btnContaier}>
        <Button
          onPress={() => router.push("/")}
          buttonColor={Colors.iconColor}
          textColor={Colors.textColor}
          labelStyle={styles.btnTxt}
          style={styles.btn}
        >
          Back to Home
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { marginTop: rh(0) },
  textContainer: {
    paddingHorizontal: rw(20),
  },

  headerTxt: {
    fontFamily: Fonts.RoadRageRegular,
    fontSize: rf(92),
    color: Colors.textColor,
  },
  secTxt: {
    fontFamily: Fonts.RoadRageRegular,
    fontSize: rf(92),
    color: Colors.secTextColor,
  },
  Searchbar: {
    fontFamily: Fonts.RoadRageRegular,
    fontSize: rf(22),
  },
  desTxt: {
    fontFamily: Fonts.RoadRageRegular,
    fontSize: rf(24),
    color: Colors.textColor,
  },
  serachContainer: {
    paddingHorizontal: rw(20),

    marginTop: rh(5),
  },
  Categorys: {
    marginTop: rh(0),
  },
  fillterContainer: {
    marginTop: rh(10),
    paddingHorizontal: rw(20),
    gap: rh(5),
  },
  btn: {
    width: rw(200),
    height: rh(40),
  },
  btnTxt: {
    fontFamily: Fonts.RoadRageRegular,
    fontSize: rf(24),
    color: Colors.textColor,
    lineHeight: rh(24),
  },
  btnContaier: {
    marginTop: rh(10),
    alignItems: "center",
    justifyContent: "center",
  },
  genresContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
  genresBtn: {
    width: "30%",
    marginVertical: rh(3),
    padding: rw(10),
    borderRadius: rw(8),
    alignItems: "center",
  },
  lableFillter: {
    color: Colors.textColor,
    fontFamily: Fonts.RoadRageRegular,
    fontSize: rf(22),
    lineHeight: rh(22),
  },
});
