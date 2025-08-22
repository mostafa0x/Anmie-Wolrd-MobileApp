import { StateType } from "@/types/store/StateType";
import { Stack } from "expo-router";
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
              <Stack
                screenOptions={{
                  headerShown: false,
                  contentStyle: { backgroundColor: "transparent" },
                  animation: "fade",
                }}
              >
                <Stack.Protected guard={!!userToken}>
                  <Stack.Screen name="(tabs)/index" />
                  <Stack.Screen name="(tabs)/AnmieInfo/[id]/index" />
                  <Stack.Screen name="(tabs)/SearchResults/index" />
                  <Stack.Screen name="(tabs)/CategoryInfo/[type]/index" />
                  <Stack.Screen name="(tabs)/Serach/index" />
                  <Stack.Screen name="(tabs)/Menu/page" />
                </Stack.Protected>
                <Stack.Protected guard={!!!userToken}>
                  <Stack.Screen name="Login" />
                </Stack.Protected>
              </Stack>
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
