import LinearView from "@/components/LinearView";
import { store } from "@/lib/store";
import AllProviders from "@/Providers/Providers";
import { useFonts } from "expo-font";
import { Slot } from "expo-router";
import { useEffect } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import "react-native-reanimated";
import { Provider } from "react-redux";
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
            <Slot />
          </AllProviders>
        </LinearView>
      </Provider>
    </GestureHandlerRootView>
  );
}
