import { Colors, Fonts } from "@/constants/Colors";
import { AnmieType } from "@/types/store/AppSliceType";
import { rf, rh, rw } from "@/utils/dimensions";
import { FlashList } from "@shopify/flash-list";
import React, { memo, useCallback, useRef } from "react";
import { StyleSheet, Text, View } from "react-native";
import { ActivityIndicator } from "react-native-paper";
import ListItem from "./item/index";

export type fromType = "Home" | "Category" | "any";
function ListAnmie({
  data,
  isLoading = true,
  from,
  hasNextPage,
  fetchNextPage,
}: {
  data: AnmieType[] | undefined;
  isLoading: boolean;
  from: fromType;
  hasNextPage?: boolean;
  fetchNextPage?: any;
}) {
  const isHome = from == "Home";
  const listRef = useRef<FlashList<AnmieType>>(null);

  const renderItem = useCallback(
    ({ item }: { item: AnmieType }) => (
      <ListItem item={item} isLoading={isLoading} from={from} />
    ),
    [isLoading, from]
  );

  const renderFooter = useCallback(() => {
    if (isHome || !hasNextPage) return null;
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size={rf(50)} color={Colors.iconColor} />
      </View>
    );
  }, [isHome, hasNextPage, styles.loadingContainer]);

  const handleEndReached = useCallback(() => {
    if (hasNextPage && !isHome) {
      fetchNextPage();
    }
  }, [hasNextPage, isHome, fetchNextPage]);

  return (
    <View style={[styles.list, !isHome && styles.list_unHome]}>
      <FlashList
        ref={listRef}
        data={isLoading ? Array(4) : data ?? []}
        estimatedItemSize={isHome ? 133 : 203}
        keyExtractor={(item, index) => index.toString()}
        horizontal={isHome}
        numColumns={isHome ? 1 : 3}
        scrollEnabled={!isLoading}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingLeft: isHome ? rw(19) : rw(13),
          paddingRight: isHome ? rw(30) : rw(0),
          paddingBottom: isHome ? rh(10) : rh(500),
        }}
        // initialScrollIndex={
        //   from == "Category" &&
        //   lastAnmieIndex != null &&
        //   lastAnmieIndex < data.length
        //     ? lastAnmieIndex ?? 0
        //     : 0
        // }
        ItemSeparatorComponent={() =>
          !isHome ? (
            <View style={{ height: rh(32) }} />
          ) : (
            <View style={{ width: rw(19) }} />
          )
        }
        ListEmptyComponent={() => (
          <View style={styles.emptyContainer}>
            <Text style={styles.txtEmpty}>Empty List</Text>
          </View>
        )}
        ListFooterComponent={renderFooter}
        onEndReached={handleEndReached}
        onEndReachedThreshold={0.8}
        renderItem={renderItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  list: {
    height: "auto",
    width: "auto",
    marginTop: rh(9),
  },
  list_unHome: {
    height: "100%",
    width: "auto",
    marginTop: rh(9),
  },
  txtEmpty: {
    fontFamily: Fonts.RoadRageRegular,
    color: Colors.textColor,
    fontSize: rf(28),
  },
  emptyContainer: {
    marginTop: rh(20),
  },
  loadingContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: rh(20),
  },
});

export default memo(ListAnmie);
