import AppBar from "@/components/AppBar";
import List from "@/components/List";
import { useSerachAnmie } from "@/hooks/useSerachAnmie";
import { useLocalSearchParams } from "expo-router";
import React from "react";
import { StyleSheet, View } from "react-native";

export default function SearchResults() {
  const { q, status } = useLocalSearchParams();
  const serachWord = q ? (Array.isArray(q) ? q[0] : q) : "";
  const statusType = status ? (Array.isArray(status) ? status[0] : status) : "";
  const { data, isLoading, hasNextPage, fetchNextPage, isError, error } =
    useSerachAnmie(serachWord, statusType);
  const flatData = data?.pages.flatMap((page) => page.data ?? []);

  return (
    <View>
      <AppBar title={serachWord} statusType={statusType} />
      <View>
        <List
          data={flatData ?? Array(9)}
          isLoading={isLoading}
          from={"Category"}
          hasNextPage={hasNextPage}
          fetchNextPage={fetchNextPage}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
