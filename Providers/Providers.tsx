import { StateType } from "@/types/store/StateType";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet } from "react-native";
import { Provider } from "react-native-paper";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { useSelector } from "react-redux";
import ProtctingRoutingProvider from "./ProtctingRouting";
import ReactQueryProvider from "./ReactQueryProvider";

export default function AllProviders({ children }: any) {
  const userToken = useSelector(
    (state: StateType) => state.UserReducer.userToken
  );

  return (
    <Provider>
      <ReactQueryProvider>
        <ProtctingRoutingProvider>
          <SafeAreaProvider>
            <SafeAreaView style={{ flex: 1 }}>
              {children}
              <StatusBar />
            </SafeAreaView>
            <StatusBar style="light" />
          </SafeAreaProvider>
        </ProtctingRoutingProvider>
      </ReactQueryProvider>
    </Provider>
  );
}

const styles = StyleSheet.create({});
