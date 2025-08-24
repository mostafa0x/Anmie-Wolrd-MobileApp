import useAnimeCharacters from "@/hooks/useAnimeCharacters";
import { CharactersType } from "@/types/CharactersType";
import { AnmieType } from "@/types/store/AppSliceType";
import { rh, rw } from "@/utils/dimensions";
import { FlashList } from "@shopify/flash-list";
import React, { memo } from "react";
import { StyleSheet, View } from "react-native";
import CharactersItem from "./item/index";

function CharactersList({ item }: { item: AnmieType }) {
  const { data, isLoading } = useAnimeCharacters(item?.mal_id ?? 0);
  return (
    <View style={styles.container}>
      <FlashList
        data={isLoading ? Array(4) : data ?? []}
        contentContainerStyle={{ paddingBottom: rh(50) }}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
        estimatedItemSize={133}
        ItemSeparatorComponent={() => <View style={{ width: rw(20) }}></View>}
        renderItem={({ item }: { item: CharactersType }) => (
          <CharactersItem character={item} isLoading={isLoading} />
        )}
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
    height: rh(400),
  },
});

export default memo(CharactersList);
