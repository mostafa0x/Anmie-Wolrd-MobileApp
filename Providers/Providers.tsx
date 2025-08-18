import React from "react";
import { StyleSheet } from "react-native";
import ReactQueryProvider from "./ReactQueryProvider";

export default function AllProviders({ children }: any) {
  return <ReactQueryProvider>{children}</ReactQueryProvider>;
}

const styles = StyleSheet.create({});
