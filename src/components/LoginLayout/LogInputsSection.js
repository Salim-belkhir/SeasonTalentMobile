import { StyleSheet, View } from "react-native";
import { Colors } from "~/theme";
import { connect } from "react-redux";
import React from "react";
import LogInSection from "./SignInSection";
import SignInSection from "./SignUpSection";

// this is the state from redux store
//to check if the user is trying to subscribe or login
const mapStateToProps = (state) => ({
  logState: state.logSignIn.logState,
});

/**
 * Renders the login or sign up section based on the logState prop.
 * @param {Object} props - The component props.
 * @param {Object} props.navigation - The navigation object.
 * @param {boolean} props.logState - The login state.
 * @returns {JSX.Element} - The rendered component.
 */
const LogInputSection = ({ navigation, logState }) => {
  return (
    <View style={styles.inputFieldsContainer}>
      {logState ? (
        <LogInSection navigation={navigation} />
      ) : (
        <SignInSection navigation={navigation} />
      )}
    </View>
  );
};

export default connect(mapStateToProps)(LogInputSection);

const styles = StyleSheet.create({
  inputFieldsContainer: {
    width: "100%",
    backgroundColor: Colors.main_white,
    marginTop: 31,
  },
});
