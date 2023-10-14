import React from "react";
import { View, Image } from "react-native";
import { Button } from "~/components";
import { signOut } from "firebase/auth";
import { auth } from "../../firebaseConfig";
import { googleSignOut } from "~/redux/actions";
import { connect } from "react-redux";

const mapStateToProps = (state) => ({
  isAuthenticated: state.googleAuth.isAuthenticated,
  userInfo: state.googleAuth.userInfo,
});

const mapDispatchToProps = {
  googleSignOut,
};

const HomeScreen = ({ navigation, googleSignOut, isAuthenticated }) => {
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("Sign out successful");
      })
      .catch((error) => {
        console.log("An error occurred while signing out");
      });
    googleSignOut();
    console.log("isAuthenticated2 : ", isAuthenticated);
    navigation.navigate("Login");
  };
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Image
        source={require("~/assets/images/logo_SeasonTalent.png")}
        alt="Season Talent"
      />
      <Button label="Login" type="primary" hideIcon onPress={handleSignOut} />
    </View>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
