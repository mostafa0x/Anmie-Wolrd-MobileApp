import AvatarFC from "@/components/AvatarFC";
import { Colors } from "@/constants/Colors";
import handleLogOut from "@/services/handleLogOut";
import { StateType } from "@/types/store/StateType";
import { rf, rh, rw } from "@/utils/dimensions";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";

export default function Menu() {
  const dispatch = useDispatch();
  const { userData } = useSelector((state: StateType) => state.UserReducer);

  async function logout() {
    try {
      await handleLogOut(dispatch);
    } catch (err: any) {
      console.log(err);
    }
  }
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <AvatarFC avatar={userData?.photo ?? ""} />
        <View style={styles.headerTEXT}>
          <Text style={styles.upperLable}>{userData?.name}</Text>
          <Text
            adjustsFontSizeToFit
            numberOfLines={1}
            minimumFontScale={0.8}
            style={styles.lowerLable}
          >
            {userData?.email}
          </Text>
        </View>
      </View>
      <View style={styles.bordrBottom}></View>

      <Button onPress={logout}>Log out</Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: rw(16),
    paddingVertical: rh(35),
  },
  headerContainer: {
    gap: rw(23),
    flexDirection: "row",
    alignItems: "center",
  },
  headerTEXT: {
    gap: rh(18),
    flexShrink: 1,
  },
  upperLable: {
    fontSize: rf(24),
    color: Colors.textColor,
  },
  lowerLable: {
    fontSize: rf(24),
    color: Colors.iconColor,
  },
  bordrBottom: {
    borderBottomWidth: 2,
    paddingBottom: rh(34),
    borderColor: "#978D8D",
    marginLeft: rw(38),
    marginRight: rw(21),
  },
  btnSignOut: {},
});
