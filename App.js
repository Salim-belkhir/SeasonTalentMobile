import React, { useCallback } from "react";
import { MainNavigator } from "~/navigation";
import { useFonts } from "expo-font";
import { Fonts, Colors } from "~/theme";
import * as SplashScreen from "expo-splash-screen";
import { View, StyleSheet } from "react-native";
import store from "~/redux/store";
import { Provider } from "react-redux";

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
    <Provider store={store}>
      <View onLayout={onLayoutRootView} style={globalStyles.container}>
        <MainNavigator />
      </View>
    </Provider>
  );
};

export default App;

const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.main_white,
  },
});
