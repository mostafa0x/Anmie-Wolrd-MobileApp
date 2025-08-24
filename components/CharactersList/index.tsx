import useAnimeCharacters from "@/hooks/useAnimeCharacters";
import { CharactersType } from "@/types/CharactersType";
import { AnmieType } from "@/types/store/AppSliceType";
import { rh, rw } from "@/utils/dimensions";
import { FlashList } from "@shopify/flash-list";
import React, { memo, useEffect } from "react";
import { StyleSheet, View } from "react-native";
import CharactersItem from "./item/index";

function CharactersList({ item }: { item: AnmieType }) {
  const { data, isLoading, isError, error } = useAnimeCharacters(
    item?.mal_id ?? 0
  );
  useEffect(() => {
    console.log(error);

    return () => {};
  }, [error]);

  return (
    <View style={styles.container}>
      <FlashList
        horizontal
        data={isError ? Array(4) : isLoading ? Array(4) : data ?? []}
        contentContainerStyle={{ paddingBottom: rh(50) }}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item, index) =>
          item?.character?.mal_id
            ? item?.character?.mal_id.toString()
            : index.toString()
        }
        estimatedItemSize={133}
        ItemSeparatorComponent={() => <View style={{ width: rw(20) }}></View>}
        renderItem={({ item }: { item: CharactersType }) => (
          <CharactersItem
            character={item}
            isLoading={isError ? true : isLoading}
          />
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
    height: rh(350),
  },
});

export default memo(CharactersList);
