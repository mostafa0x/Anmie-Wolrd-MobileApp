import LinearView from "@/components/LinearView";
import { store } from "@/lib/store";
import { useFonts } from "expo-font";
import { Slot } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import "react-native-reanimated";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Provider } from "react-redux";

export default function RootLayout() {
  const [loaded] = useFonts({
    RoadRageRegular: require("../assets/fonts/RoadRage-Regular.ttf"),
  });

  if (!loaded) {
    // Async font loading only occurs in development.
    return null;
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Provider store={store}>
        <LinearView>
          <SafeAreaProvider>
            <SafeAreaView>
              <Slot />
              <StatusBar style="dark" />
            </SafeAreaView>
          </SafeAreaProvider>
        </LinearView>
      </Provider>
    </GestureHandlerRootView>
  );
}
