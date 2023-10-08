import React from "react";
import { MainNavigator } from "~/navigation";
import { useFonts } from "expo-font";
import { Fonts } from "~/theme";
import * as SplashScreen from "expo-splash-screen";
import { useCallback } from "react";
import { View, StyleSheet } from "react-native";
import { Colors } from "~/theme";

SplashScreen.preventAutoHideAsync();

const App = () => {
  const [fontsLoaded] = useFonts(Fonts.CUSTOM_FONTS);

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View onLayout={onLayoutRootView} style={globalStyles.container}>
      <MainNavigator />
    </View>
  );
};

export default App;

const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.main_white,
  },
});
