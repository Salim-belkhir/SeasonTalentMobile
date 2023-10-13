import React, { useCallback, useState, useEffect } from "react";
import { MainNavigator } from "~/navigation";
import { useFonts } from "expo-font";
import { Fonts, Colors } from "~/theme";
import * as SplashScreen from "expo-splash-screen";
import { View, StyleSheet, Alert, ActivityIndicator } from "react-native";
import store from "~/redux/store";
import { Provider } from "react-redux";
import SignInScreen from "~/screens/SignInScreen";
import * as Google from "expo-auth-session/providers/google";
import * as WebBrowser from "expo-web-browser";
import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithCredential,
} from "firebase/auth";
import { auth } from "./firebaseConfig";
import AsyncStorage from "@react-native-async-storage/async-storage";

WebBrowser.maybeCompleteAuthSession();

SplashScreen.preventAutoHideAsync();

const App = () => {
  const [fontsLoaded] = useFonts(Fonts.CUSTOM_FONTS);
  const [loading, setLoading] = useState(false);
  const [userInfo, setUserInfo] = useState(null);
  const [request, response, promptAsync] = Google.useAuthRequest({
    iosClientId:
      "119884661682-bsjnv2nrfle9vu6ks3n5cp3d66b5ikvb.apps.googleusercontent.com",
    androidClientId:
      "119884661682-uk1elmgv2kt5tfk7jco9rc02ra2emooj.apps.googleusercontent.com",
  });

  useEffect(() => {
    if (response?.type === "success") {
      const { id_token } = response.params;
      const credential = GoogleAuthProvider.credential(id_token);
      signInWithCredential(auth, credential);
    }
  }, [response]);

  const checkLocalUser = async () => {
    try {
      setLoading(true);
      const userJSON = await AsyncStorage.getItem("@user");
      const userData = userJSON ? JSON.parse(userJSON) : null;
      console.log("user data", userData);
      // let's compare the expiration time of the token with the current time
      // if it's expired, we'll log the user outr
      setUserInfo(userData);
    } catch (e) {
      Alert.alert("Error", e.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    checkLocalUser();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("user", JSON.stringify(user, null, 2));
        setUserInfo(user);
        AsyncStorage.setItem("@user", JSON.stringify(user));
      } else {
        console.log("user is NOT logged in", JSON.stringify(user, null, 2));
        setUserInfo(null);
        AsyncStorage.removeItem("@user");
      }
    });

    return () => unsubscribe();
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
        {loading ? (
          <ActivityIndicator sizew="large" />
        ) : userInfo ? (
          <MainNavigator />
        ) : (
          <SignInScreen promtAsync={promptAsync} />
        )}
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
