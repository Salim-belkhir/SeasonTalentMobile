import React from "react";
import { View, Image } from "react-native";
import { Button } from "~/components";
import { signOut } from "firebase/auth";
import { auth } from "../../firebaseConfig";
import { googleSignOut } from "~/redux/actions";
import { connect } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";

const mapStateToProps = (state) => ({
  isAuthenticated: state.googleAuth.isAuthenticated,
  userInfo: state.googleAuth.userInfo,
});

const mapDispatchToProps = {
  googleSignOut,
};

/**
 * Renders the Home screen component.
 * @param {object} navigation - The navigation object used to navigate between screens.
 * @param {function} googleSignOut - The function used to sign out the user from Google.
 * @returns {JSX.Element} - The Home screen component JSX.Element.
 */
const JobOffersScreen = ({ navigation, googleSignOut }) => {
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
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Image
                source={require("~/assets/images/logo_SeasonTalent.png")}
                alt="Season Talent"
            />
            <Button label="Login" type="primary" hideIcon onPress={handleSignOut} />
        </View>
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(JobOffersScreen);
