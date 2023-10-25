import React from "react";
import { View, Text, Image } from "react-native";
import { Button } from "~/components";
import { signOut } from "firebase/auth";
import { auth } from "../../firebaseConfig";
import { googleSignOut } from "~/redux/actions";
import { connect } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Colors } from "~/theme";

const mapStateToProps = (state) => ({
  isAuthenticated: state.googleAuth.isAuthenticated,
  userInfo: state.googleAuth.userInfo,
});

const mapDispatchToProps = {
  googleSignOut,
};

const ProfileScreen = ({ navigation, googleSignOut }) => {
  /**
   * Handles the sign out process.
   * @returns {Promise<void>}
   */
  const handleSignOut = async () => {
    await signOut(auth);
    await AsyncStorage.removeItem("@user");
    googleSignOut();
    navigation.navigate("Login");
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: Colors.main_white,
      }}
    >
      <Text>ProfileScreen</Text>
      {/* <Button
        label="Navigate to CompaniesScreen"
        type="primary"
        hideIcon
        onPress={() =>
          navigation.navigate("MainBottomTabNavigator", {
            screen: "Établissements",
          })
        }
      /> */}
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Image
          source={require("~/assets/images/logo_SeasonTalent.png")}
          alt="Season Talent"
        />
        <Button
          label="LogOut"
          type="primary"
          hideIcon
          onPress={handleSignOut}
        />
      </View>
      <Button
        label="Navigate to CompaniesScreen"
        type="primary"
        hideIcon
        onPress={() => navigation.navigate("CompaniesScreen")}
      />
    </View>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileScreen);
