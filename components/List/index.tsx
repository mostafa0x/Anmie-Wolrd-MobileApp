import { Colors, Fonts } from "@/constants/Colors";
import { setIsScrolling } from "@/lib/store/AppSlice";
import { AnmieType } from "@/types/store/AppSliceType";
import { rf, rh, rw } from "@/utils/dimensions";
import { FlashList } from "@shopify/flash-list";
import React, { memo } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useDispatch } from "react-redux";
import ListItem from "./item/index";

function ListAnmie({ data }: { data: AnmieType[] }) {
  const dispatch = useDispatch();
  return (
    <View style={styles.list}>
      <FlashList
        onScrollBeginDrag={() => dispatch(setIsScrolling(true))}
        onScrollEndDrag={() => dispatch(setIsScrolling(false))}
        data={data}
        estimatedItemSize={203}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <ListItem item={item} />}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingLeft: rw(19),
          paddingRight: rw(30),
        }}
        ItemSeparatorComponent={() => (
          <View style={{ marginLeft: rw(19) }}></View>
        )}
        ListEmptyComponent={() => (
          <View style={styles.emptyContainer}>
            <Text style={styles.txtEmpty}>Empty List</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  list: {
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
});

export default memo(ListAnmie);
