import { Colors, Fonts } from "@/constants/Colors";
import { GenresTypes } from "@/types/GenresTypes";
import { rf, rh, rw } from "@/utils/dimensions";
import React, { memo } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

function GenresContainer({
  setGenresValue,
  genresValue,
}: {
  genresValue: GenresTypes;
  setGenresValue: any;
}) {
  const genresbtns = [
    {
      value: "1_Action",
      label: "Action",
    },
    {
      value: "2_Adventure",
      label: "Adventure",
    },
    { value: "8_Drama", label: "Drama" },
    { value: "14_Horror", label: "Horror" },
    { value: "22_Romance", label: "Romance" },
  ];
  return (
    <View style={styles.genresContainer}>
      {genresbtns.map((btn, index) => (
        <TouchableOpacity
          key={index}
          style={[
            styles.genresBtn,
            {
              backgroundColor:
                genresValue == btn.value ? Colors.iconColor : "rgba(0,0,0,0.2)",
            },
          ]}
          onPress={() =>
            setGenresValue(genresValue === btn.value ? "" : btn.value)
          }
        >
          <Text
            style={{
              color: Colors.textColor,
              width: "100%",
              textAlign: "center",
              fontFamily: Fonts.RoadRageRegular,
              fontSize: rf(22),
            }}
          >
            {btn.label.charAt(0).toUpperCase() + btn.label.slice(1)}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
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
});

export default memo(GenresContainer);
