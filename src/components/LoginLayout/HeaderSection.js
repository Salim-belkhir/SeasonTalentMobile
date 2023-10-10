import { StyleSheet, View, Image } from "react-native";
import Typography from "../Typography";
import { Colors } from "~/theme";
import React from "react";
import { connect } from "react-redux";

const mapStateToProps = (state) => ({
  logState: state.logSignIn.logState,
});

/**
 * Header section component for the login layout.
 * @param {object} navigation - Navigation object for the component.
 * @param {boolean} logState - Boolean indicating whether the user is logged in or not.
 * @returns {JSX.Element} - Returns the JSX element for the header section.
 */
const HeaderSection = ({ navigation, logState }) => {
  return (
    <View>
      {/* This is the logo */}
      <Image
        source={require("~/assets/images/logoSeasonTalent.png")}
        alt="Season Talent"
        style={styles.logoSeasonTalent}
      />
      {/* This is the title container */}
      <View style={styles.titleContainer}>
        {logState ? (
          <View>
            <Typography type="l_bold" typographyStyle={styles.title}>
              Content de vous revoir 👋
            </Typography>
            <Typography type="l_medium" typographyStyle={styles.titleAction}>
              Connectez-vous. Explorez les candidats !
            </Typography>
          </View>
        ) : (
          <View>
            <Typography type="l_bold" typographyStyle={styles.title}>
              Bienvenue sur Season Talent 👍
            </Typography>
            <Typography type="l_medium" typographyStyle={styles.titleAction}>
              Inscrivez-vous. Explorez les candidats !
            </Typography>
          </View>
        )}
      </View>
    </View>
  );
};

export default connect(mapStateToProps)(HeaderSection);

const styles = StyleSheet.create({
  logoSeasonTalent: {
    width: 180,
    height: 71,
    resizeMode: "contain",
    marginTop: 50,
  },
  titleContainer: {
    marginTop: 34,
  },
  title: {
    fontSize: 20,
    lineHeight: 28,
    marginBottom: 13,
  },
  titleAction: {
    color: Colors.dark_grey,
  }
});
