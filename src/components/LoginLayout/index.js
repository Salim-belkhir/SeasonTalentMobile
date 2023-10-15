import HeaderSection from "./HeaderSection";
import LogInputsSection from "./LogInputsSection";
import FooterSection from "./FooterSection";
import React, { useEffect, useState } from "react";
import { googleSignIn } from "~/redux/actions";
import {
  StyleSheet,
  TouchableWithoutFeedback,
  View,
  Keyboard,
  ActivityIndicator,
} from "react-native";
import { Colors } from "~/theme";
import { connect } from "react-redux";
import Config from "react-native-config";
import * as Google from "expo-auth-session/providers/google";
import * as WebBrowser from "expo-web-browser";
import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithCredential,
} from "firebase/auth";
import { auth } from "../../../firebaseConfig";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Load the web browser module to be able to log in with Google
WebBrowser.maybeCompleteAuthSession();

// the mapStateToProps and mapDispatchToProps functions are used to connect the component to the Redux store
const mapStateToProps = (state) => ({
  userInfo: state.googleAuth.userInfo,
  isAuthenticated: state.googleAuth.isAuthenticated,
});

const mapDispatchToProps = {
  googleSignIn,
};

/**
 * Renders the Login screen component.
 * @param {object} navigation - The navigation object used to navigate between screens.
 * @param {function} googleSignIn - The function used to sign in the user with Google.
 * @returns {JSX.Element} - The Login screen component JSX.Element.
 */
const LoginLayout = ({ navigation, googleSignIn }) => {
  // this is used to dismiss the keyboard when the user taps outside of the input fields
  const dismissKeyboard = () => {
    Keyboard.dismiss();
  };
  const [loading, setLoading] = useState(false);
  const [request, response, promptAsync] = Google.useAuthRequest({
    iosClientId: Config.IOS_CLIENT_ID,
    androidClientId: Config.ANDROID_CLIENT_ID,
  });

  useEffect(() => {
    if (response?.type === "success") {
      const { id_token } = response.params;
      const credential = GoogleAuthProvider.credential(id_token);
      signInWithCredential(auth, credential);
    }
  }, [response]);

  /**
   * Checks if the user is already logged in locally.
   */
  const checkLocalUser = async () => {
    try {
      setLoading(true);
      const userJSON = await AsyncStorage.getItem("@user");
      const userData = userJSON ? JSON.parse(userJSON) : null;
      // console.log("Checking local user : ", userData);
      if (userData) {
        googleSignIn(userData);
        // console.log("cheking user the store : ", userInfo);
        navigation.navigate("MainBottomTabNavigator");
      }
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
        // console.log("user", JSON.stringify(user, null, 2));
        googleSignIn(user);
        AsyncStorage.setItem("@user", JSON.stringify(user));
        navigation.navigate("MainBottomTabNavigator");
      } else {
        // console.log("user is NOT logged in", JSON.stringify(user, null, 2));
        AsyncStorage.removeItem("@user");
        navigation.navigate("Login");
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <TouchableWithoutFeedback onPress={dismissKeyboard}>
      {!loading ? (
        <View style={styles.container}>
          <HeaderSection navigation={navigation} />
          <LogInputsSection navigation={navigation} />
          <FooterSection navigation={navigation} promptAsync={promptAsync} />
        </View>
      ) : (
        <ActivityIndicator size="large" style={styles.container} />
      )}
    </TouchableWithoutFeedback>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginLayout);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 33,
    backgroundColor: Colors.main_white,
  },
});
