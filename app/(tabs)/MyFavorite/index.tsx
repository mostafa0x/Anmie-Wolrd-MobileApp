import AppBar from "@/components/AppBar";
import List from "@/components/List";
import useMyFavourties from "@/hooks/useMyFavourties";
import { StateType } from "@/types/store/StateType";
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { useSelector } from "react-redux";

export default function MyFavorite() {
  const [isLoading, setIsLoading] = useState(false);
  const { userToken } = useSelector((state: StateType) => state.UserReducer);
  const { data } = useMyFavourties(userToken);
  return (
    <View>
      <AppBar title={"My Favorite"} />
      <View>
        <List data={[]} isLoading={isLoading} from={"Category"} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
