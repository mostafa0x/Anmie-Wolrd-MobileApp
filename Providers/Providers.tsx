import React from "react";
import { StyleSheet } from "react-native";
import { Provider } from "react-native-paper";
import ProtctingRoutingProvider from "./ProtctingRouting";
import ReactQueryProvider from "./ReactQueryProvider";

export default function AllProviders({ children }: any) {
  return (
    <Provider>
      <ReactQueryProvider>
        <ProtctingRoutingProvider>{children}</ProtctingRoutingProvider>
      </ReactQueryProvider>
    </Provider>
  );
}

const styles = StyleSheet.create({});
