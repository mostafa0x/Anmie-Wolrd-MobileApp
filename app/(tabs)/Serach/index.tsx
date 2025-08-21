import Categorys from "@/components/Categorys";
import { Colors, Fonts } from "@/constants/Colors";
import { rf, rh, rw } from "@/utils/dimensions";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button, Searchbar, SegmentedButtons } from "react-native-paper";

export default function Serach() {
  const [value, setValue] = useState("");
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
    router.push({ pathname: "/SearchResults", params: { q, status: value } });
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
          placeholder="Search"
          onSubmitEditing={SerachByText}
          onIconPress={SerachByText}
        />
      </View>
      <View style={styles.fillterContainer}>
        <SegmentedButtons
          value={value}
          onValueChange={(v) => (v == value ? setValue("") : setValue(v))}
          buttons={btns.map((btn) => ({
            style: {
              backgroundColor:
                value == btn.value ? Colors.iconColor : "rgba(0,0,0,0.2)",
            },
            labelStyle: {
              color: Colors.textColor,
            },
            value: btn.value,
            label: btn.label.charAt(0).toLocaleUpperCase() + btn.label.slice(1),
          }))}
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
  container: { marginTop: rh(10) },
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

    marginTop: rh(20),
  },
  Categorys: {
    marginTop: rh(50),
  },
  fillterContainer: {
    marginTop: rh(30),
    paddingHorizontal: rw(20),
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
    marginTop: rh(60),
    alignItems: "center",
    justifyContent: "center",
  },
});
