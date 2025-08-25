import { Colors, Fonts } from "@/constants/Colors";
import useAnimeCharacters from "@/hooks/useAnimeCharacters";
import { CharactersType } from "@/types/CharactersType";
import { AnmieType } from "@/types/store/AppSliceType";
import { rf, rh, rw } from "@/utils/dimensions";
import { FlashList } from "@shopify/flash-list";
import React, { memo, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
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
        contentContainerStyle={styles.contentContainerList}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item, index) =>
          item?.character?.mal_id
            ? item?.character?.mal_id.toString()
            : index.toString()
        }
        estimatedItemSize={133}
        ItemSeparatorComponent={() => <View style={styles.spaceItems}></View>}
        ListEmptyComponent={() => (
          <View style={styles.emptyTitleContainer}>
            <Text style={styles.emptyTitle}>Unknown until this moment</Text>
          </View>
        )}
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
    height: rh(330),
  },
  contentContainerList: {
    paddingBottom: rh(50),
    paddingRight: rh(40),
  },
  emptyTitleContainer: { marginTop: rh(22) },
  emptyTitle: {
    fontFamily: Fonts.RoadRageRegular,
    fontSize: rf(26),
    color: Colors.iconColor,
  },
  spaceItems: { width: rw(20) },
});

export default memo(CharactersList);
