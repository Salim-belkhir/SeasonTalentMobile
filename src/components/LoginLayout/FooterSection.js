import React from "react";
import { View, StyleSheet, Image } from "react-native";
import { Colors } from "~/theme";
import Typography from "../Typography";

const FooterSection = ({ navigation, logIn = true }) => {
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
          Vous n'avez pas de compte ?
        </Typography>
        <Typography
          type="l_bold"
          typographyStyle={styles.switch}
          onPress={() => navigation.push("Details")}
        >
          Inscrivez-vous
        </Typography>
      </View>
    </View>
  );
};

export default FooterSection;

const styles = StyleSheet.create({
  continueParent: {
    marginTop: 70,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
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
    marginTop: 52,
  },
  logSwitchParent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
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
