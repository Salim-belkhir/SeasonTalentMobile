import { StyleSheet, View } from "react-native";
import { Colors } from "~/theme";
import { connect } from "react-redux";
import React from "react";
import LogInSection from "./SignInSection";
import SignInSection from "./SignUpSection";

const mapStateToProps = (state) => ({
  logState: state.logSignIn.logState,
});

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
