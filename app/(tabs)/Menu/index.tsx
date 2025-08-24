import AvatarFC from "@/components/AvatarFC";
import LogoutIcon from "@/components/Icons/LogoutIcon";
import LoveIcon from "@/components/Icons/LoveIcon";
import Loader from "@/components/Loader";
import { Colors, Fonts } from "@/constants/Colors";
import handleLogOut from "@/services/handleLogOut";
import { StateType } from "@/types/store/StateType";
import { rf, rh, rw } from "@/utils/dimensions";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";

export default function Menu() {
  const router = useRouter();
  const dispatch = useDispatch();
  const { userData } = useSelector((state: StateType) => state.UserReducer);
  const [isLoading, setisLoading] = useState(false);

  async function logout() {
    if (isLoading) return;
    setisLoading(true);
    try {
      await handleLogOut(dispatch);
    } catch (err: any) {
      console.log(err);
      setisLoading(false);
    }
  }
  return (
    <>
      {isLoading && <Loader />}
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
        <View style={[styles.bordrBottom, styles.boderSpace]}></View>
        <TouchableOpacity
          onPress={() => router.push("/MyFavorite" as any)}
          style={styles.btnContainer}
        >
          <LoveIcon width={rw(26)} height={rh(24)} iconColor="#3B65F0" />
          <Text style={styles.MyfavoriteTxt}>My favorite</Text>
        </TouchableOpacity>
        <View style={styles.bottomView}>
          <View style={styles.bordrBottom}></View>
          <TouchableOpacity onPress={logout} style={styles.btnContainer}>
            <LogoutIcon />
            <Text style={styles.MyfavoriteTxt}>Log out</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  boderSpace: {
    marginBottom: rh(36),
  },
  btnSignOut: {},
  btnContainer: {
    paddingLeft: rw(28),
    flexDirection: "row",
    alignItems: "center",
    gap: rw(24),
  },
  MyfavoriteTxt: {
    fontFamily: Fonts.RoadRageRegular,
    fontSize: rf(36),
    color: Colors.textColor,
  },
  bottomView: {
    position: "absolute",
    bottom: rh(20),
    width: "100%",
    gap: rh(18),
  },
});
