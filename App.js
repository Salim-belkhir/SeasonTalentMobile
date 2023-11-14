import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useCallback, useEffect } from "react";
import { Platform, StyleSheet, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { enableScreens } from "react-native-screens";
import { Provider } from "react-redux";
import { MainNavigator } from "~/navigation";
import store from "~/redux/store";
import { Colors, Fonts } from "~/theme";

SplashScreen.preventAutoHideAsync();

const App = () => {
  const [fontsLoaded] = useFonts(Fonts.CUSTOM_FONTS);
  useEffect(() => {
    if (Platform.OS === "ios") {
      enableScreens(false);
    }
  }, []);

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
        <GestureHandlerRootView style={{ flex: 1 }}>
          <MainNavigator />
        </GestureHandlerRootView>
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
