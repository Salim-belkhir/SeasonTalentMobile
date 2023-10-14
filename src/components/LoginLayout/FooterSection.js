import React, { useEffect, useState } from "react";
import { View, StyleSheet, Image, TouchableOpacity, Alert } from "react-native";
import { Colors } from "~/theme";
import Typography from "../Typography";
import { signIn, signUp, googleSignIn } from "~/redux/actions";
import { connect } from "react-redux";
import * as Google from "expo-auth-session/providers/google";
import * as WebBrowser from "expo-web-browser";
import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithCredential,
} from "firebase/auth";
import { auth } from "../../../firebaseConfig";
import AsyncStorage from "@react-native-async-storage/async-storage";

WebBrowser.maybeCompleteAuthSession();

const mapStateToProps = (state) => ({
  logState: state.logSignIn.logState,
  userInfo: state.googleAuth.userInfo,
  isAuthenticated: state.googleAuth.isAuthenticated,
});

const mapDispatchToProps = {
  signUp,
  signIn,
  googleSignIn,
};

const FooterSection = ({
  navigation,
  logState,
  signUp,
  signIn,
  googleSignIn,
  userInfo,
}) => {
  const [loading, setLoading] = useState(false);
  const [request, response, promptAsync] = Google.useAuthRequest({
    iosClientId:
      "119884661682-bsjnv2nrfle9vu6ks3n5cp3d66b5ikvb.apps.googleusercontent.com",
    androidClientId:
      "119884661682-uk1elmgv2kt5tfk7jco9rc02ra2emooj.apps.googleusercontent.com",
    // iosClientId: IOS_CLIENT_ID,
    // androidClientId: ANDROID_CLIENT_ID,
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
      console.log("Checking local user : ", userData);
      console.log("Checking local user : ", userInfo);
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
        googleSignIn(user);
        AsyncStorage.setItem("@user", JSON.stringify(user));
        navigation.navigate("Home");
      } else {
        console.log("user is NOT logged in", JSON.stringify(user, null, 2));
        AsyncStorage.removeItem("@user");
        navigation.navigate("Login");
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <View>
      <View style={[styles.continueParent, styles.buttonParentLayout]}>
        <View style={[styles.lineView, styles.lineViewLayout]} />
        <Typography type="l_medium" typographyStyle={styles.continueText}>
          Ou continuez avec
        </Typography>
        <View style={[styles.lineView, styles.lineViewLayout]} />
      </View>

      {/* {loading && <ActivityIndicator sizew="large" />} */}

      <TouchableOpacity onPress={() => promptAsync()}>
        <Image
          source={require("~/assets/icons/google.png")}
          style={styles.socialIcon}
        />
      </TouchableOpacity>

      <View style={styles.logSwitchParent}>
        <Typography type="l_medium" typographyStyle={styles.logSwitch}>
          {logState
            ? "Vous n'avez pas de compte ?"
            : "Vous avez déjà un compte ?"}
        </Typography>
        <Typography
          type="l_bold"
          typographyStyle={styles.switch}
          onPress={() => {
            logState ? signUp() : signIn();
          }}
        >
          {logState ? "Inscrivez-vous" : "Connectez-vous"}
        </Typography>
      </View>
    </View>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(FooterSection);

const styles = StyleSheet.create({
  continueParent: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    marginTop: 20,
  },
  continueText: {
    color: Colors.main_grey,
    fontSize: 14,
  },
  buttonParentLayout: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  lineViewLayout: {
    marginHorizontal: 3,
  },
  lineView: {
    flex: 1,
    height: 1,
    backgroundColor: Colors.main_grey,
  },
  socialIcon: {
    width: 120,
    height: 120,
    alignSelf: "center",
    resizeMode: "contain",
  },
  logSwitchParent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  logSwitch: {
    color: Colors.main_grey,
    fontSize: 14,
  },
  switch: {
    color: Colors.primary_color,
    fontSize: 14,
    marginLeft: 5,
  },
});
