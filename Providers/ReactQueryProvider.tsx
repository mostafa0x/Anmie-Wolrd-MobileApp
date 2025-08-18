import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import { StyleSheet } from "react-native";

const query = new QueryClient();

export default function ReactQueryProvider({ children }: any) {
  return <QueryClientProvider client={query}>{children}</QueryClientProvider>;
}

const styles = StyleSheet.create({});
