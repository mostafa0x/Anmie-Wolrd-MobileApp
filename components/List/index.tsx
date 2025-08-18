import { Colors, Fonts } from "@/constants/Colors";
import { AnmieType } from "@/types/store/AppSliceType";
import { rf, rh, rw } from "@/utils/dimensions";
import { FlashList } from "@shopify/flash-list";
import React, { memo } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useDispatch } from "react-redux";
import ListItem from "./item/index";

export type fromType = "Home" | "Category";
function ListAnmie({
  data,
  isLoading,
  from,
}: {
  data: AnmieType[];
  isLoading: boolean;
  from: fromType;
}) {
  const styles = stylesF(from);
  const dispatch = useDispatch();
  return (
    <View style={styles.list}>
      <FlashList
        data={data}
        estimatedItemSize={203}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <ListItem item={item} isLoading={isLoading} from={from} />
        )}
        horizontal={from === "Home"} // لو Home → Scroll أفقي
        numColumns={from === "Category" ? 3 : 1} // لو Category → شبكة 3 أعمدة
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingLeft: rw(19),
          paddingRight: rw(30),
        }}
        ItemSeparatorComponent={() =>
          from === "Home" ? (
            <View style={{ width: rw(19) }} />
          ) : (
            <View style={{ height: rh(19) }} />
          )
        }
        ListEmptyComponent={() => (
          <View style={styles.emptyContainer}>
            <Text style={styles.txtEmpty}>Empty List</Text>
          </View>
        )}
      />
    </View>
  );
}

function stylesF(from: fromType) {
  return StyleSheet.create({
    list: {
      height: from === "Home" ? "auto" : "100%",
      width: "100%",
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
}

export default memo(ListAnmie);
