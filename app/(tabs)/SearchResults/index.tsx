import AppBar from "@/components/AppBar";
import List from "@/components/List";
import { useSerachAnmie } from "@/hooks/useSerachAnmie";
import { useLocalSearchParams } from "expo-router";
import React, { useEffect } from "react";
import { StyleSheet, View } from "react-native";

export default function SearchResults() {
  const { q, status, genresValue } = useLocalSearchParams();
  const serachWord = q ? (Array.isArray(q) ? q[0] : q) : "";
  const statusType = status ? (Array.isArray(status) ? status[0] : status) : "";
  const genresID = genresValue
    ? Array.isArray(genresValue)
      ? genresValue[0].split("_")[0]
      : genresValue.split("_")[0]
    : "";
  const genresTitle = genresValue
    ? Array.isArray(genresValue)
      ? genresValue[0].split("_")[1]
      : genresValue.split("_")[1]
    : "";
  const { data, isLoading, hasNextPage, fetchNextPage, isError, error } =
    useSerachAnmie(serachWord, statusType, genresID);
  const flatData = data?.pages.flatMap((page) => page.data ?? []);

  useEffect(() => {
    console.log(isLoading);

    return () => {};
  }, [isLoading]);

  return (
    <View>
      <AppBar
        title={serachWord}
        statusType={statusType}
        genresTitle={genresTitle}
      />
      <View>
        <List
          data={flatData}
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
