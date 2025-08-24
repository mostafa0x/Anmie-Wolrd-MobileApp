import { rw } from "@/utils/dimensions";
import { FlashList } from "@shopify/flash-list";
import React, { memo } from "react";
import { StyleSheet, View } from "react-native";
import CharactersItem from "./item/index";

function CharactersList() {
  return (
    <View style={styles.container}>
      <FlashList
        data={[1, 2, 3]}
        horizontal
        keyExtractor={(item, index) => index.toString()}
        estimatedItemSize={200}
        ItemSeparatorComponent={() => <View style={{ width: rw(20) }}></View>}
        renderItem={({ item }) => <CharactersItem />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  litemist: {
    width: "100%",
    height: 200,
  },
});

export default memo(CharactersList);
