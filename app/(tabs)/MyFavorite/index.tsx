import AppBar from "@/components/AppBar";
import List from "@/components/List";
import { Colors, Fonts } from "@/constants/Colors";
import useMyFavourties from "@/hooks/useMyFavourties";
import { StateType } from "@/types/store/StateType";
import { rf, rh, rw } from "@/utils/dimensions";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-paper";
import { useSelector } from "react-redux";

export default function MyFavorite() {
  const { userToken } = useSelector((state: StateType) => state.UserReducer);
  const { data, isLoading, isError, refetch } = useMyFavourties(userToken);
  return (
    <View>
      <AppBar title={"My Favorite"} />
      <View>
        {isError ? (
          <View style={styles.errorContainer}>
            <Text style={styles.errorText}>An error occurred</Text>
            <Button
              onPress={() => refetch()}
              style={styles.btn}
              labelStyle={styles.labelBtn}
            >
              Try Again
            </Button>
          </View>
        ) : (
          <List data={[]} isLoading={isLoading} from={"Category"} />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  errorContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: rh(100),
    gap: rh(30),
  },
  errorText: {
    fontFamily: Fonts.RoadRageRegular,
    color: "#ff0303",
    fontSize: rf(56),
  },
  btn: {
    width: rw(150),
    backgroundColor: Colors.iconColor,
  },
  labelBtn: {
    fontFamily: Fonts.RoadRageRegular,
    color: Colors.textColor,
    fontSize: rf(28),
    lineHeight: rh(30),
  },
});
