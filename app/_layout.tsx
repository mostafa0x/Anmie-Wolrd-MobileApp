import LinearView from "@/components/LinearView";
import { store } from "@/lib/store";
import AllProviders from "@/Providers/Providers";
import { useFonts } from "expo-font";
import { SplashScreen, Stack } from "expo-router";
import { useEffect } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import "react-native-reanimated";
import { Provider } from "react-redux";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts({
    RoadRageRegular: require("../assets/fonts/RoadRage-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded) {
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Provider store={store}>
        <LinearView>
          <AllProviders>
            <Stack
              screenOptions={{
                headerShown: false,
                contentStyle: { backgroundColor: "transparent" },
                animation: "fade",
              }}
            />
          </AllProviders>
        </LinearView>
      </Provider>
    </GestureHandlerRootView>
  );
}
