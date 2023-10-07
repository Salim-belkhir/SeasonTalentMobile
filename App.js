import React from "react";
import { MainNavigator } from "~/navigation";
import { useFonts } from "expo-font";
import { CUSTOM_FONTS } from "~/constants";
import * as SplashScreen from "expo-splash-screen";
import { useCallback } from "react";
import { View } from "react-native";

SplashScreen.preventAutoHideAsync();

const App = () => {
 
  const [fontsLoaded] = useFonts(CUSTOM_FONTS);

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View onLayout={onLayoutRootView} style={{ flex: 1 }}>
      <MainNavigator />
    </View>
  );
};

export default App;
