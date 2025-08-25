import AppBar from "@/components/AppBar";
import List from "@/components/List";
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";

export default function MyFavorite() {
  const [isLoading, setIsLoading] = useState(false);
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
