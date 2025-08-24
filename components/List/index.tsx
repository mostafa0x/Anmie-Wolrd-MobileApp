import { Colors, Fonts } from "@/constants/Colors";
import { AnmieType } from "@/types/store/AppSliceType";
import { StateType } from "@/types/store/StateType";
import { rf, rh, rw } from "@/utils/dimensions";
import { FlashList } from "@shopify/flash-list";
import { usePathname } from "expo-router";
import React, { memo, useRef } from "react";
import { StyleSheet, Text, View } from "react-native";
import { ActivityIndicator } from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";
import ListItem from "./item/index";

export type fromType = "Home" | "Category" | "any";
function ListAnmie({
  data,
  isLoading,
  from,
  hasNextPage,
  fetchNextPage,
}: {
  data: AnmieType[];
  isLoading: boolean;
  from: fromType;
  hasNextPage?: boolean;
  fetchNextPage?: any;
}) {
  const dispatch = useDispatch();
  const isHome = from == "Home";
  const styles = getStyles(isHome);
  const listRef = useRef<FlashList<AnmieType>>(null);
  const { lastAnmieIndex } = useSelector(
    (state: StateType) => state.AppReducer
  );
  const path = usePathname();

  return (
    <View style={styles.list}>
      <FlashList
        ref={listRef}
        data={isLoading ? Array(4) : data ?? []}
        estimatedItemSize={203}
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
        initialScrollIndex={
          from == "Category" &&
          lastAnmieIndex != null &&
          lastAnmieIndex < data.length
            ? lastAnmieIndex ?? 0
            : 0
        }
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
        ListFooterComponent={() =>
          !isHome &&
          hasNextPage && (
            <View style={styles.loadingContainer}>
              <ActivityIndicator size={rf(50)} color={Colors.iconColor} />
            </View>
          )
        }
        onEndReached={() => {
          if (hasNextPage && !isHome) {
            fetchNextPage();
          }
        }}
        onEndReachedThreshold={0.8}
        renderItem={({ item, index }: { item: AnmieType; index: number }) => (
          <ListItem
            item={item}
            index={index}
            isLoading={isLoading}
            from={from}
          />
        )}
      />
    </View>
  );
}

function getStyles(isHome: boolean) {
  return StyleSheet.create({
    list: {
      height: isHome ? "auto" : "100%",
      width: "auto",
      marginTop: rh(9),
    },
    txtEmpty: {
      fontFamily: Fonts.RoadRageRegular,
      color: Colors.textColor,
      fontSize: rf(20),
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
}

export default memo(ListAnmie);
