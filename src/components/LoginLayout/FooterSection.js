import React from "react";
import { View, StyleSheet, Image } from "react-native";
import { Colors } from "~/theme";
import Typography from "../Typography";
import { logIn, signIn } from "~/redux/actions";
import { connect } from "react-redux";

const mapStateToProps = (state) => ({
  logState: state.logSignIn.logState,
});

const mapDispatchToProps = {
  logIn,
  signIn,
};

const FooterSection = ({ navigation, logState, logIn, signIn }) => {
  return (
    <View>
      <View style={[styles.continueParent, styles.buttonParentLayout]}>
        <View style={[styles.lineView, styles.lineViewLayout]} />
        <Typography type="l_medium" typographyStyle={styles.continueText}>
          Ou continuez avec
        </Typography>
        <View style={[styles.lineView, styles.lineViewLayout]} />
      </View>

      <Image
        source={require("~/assets/icons/google.png")}
        style={styles.socialIcon}
      />

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
            logState ? signIn() : logIn();
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
