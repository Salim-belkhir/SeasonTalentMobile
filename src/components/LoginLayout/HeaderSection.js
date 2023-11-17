import React from "react";
import { StyleSheet, View, Image } from "react-native";
import Typography from "../Typography";
import { Colors } from "~/theme";
import { connect } from "react-redux";

const mapStateToProps = (state) => ({
  logState: state.logSignIn.logState,
});

const HeaderSection = ({ navigation, logState }) => {
  const title = logState
    ? "Content de vous revoir 👋"
    : "Bienvenue sur Season Talent 👍";
  const action = logState
    ? "Connectez-vous. Explorez les candidats !"
    : "Inscrivez-vous. Créez des offres !";

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
        <Typography type="l_bold" typographyStyle={styles.title}>
          {title}
        </Typography>
        <Typography type="l_medium" typographyStyle={styles.titleAction}>
          {action}
        </Typography>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  logoSeasonTalent: {
    width: 180,
    height: 71,
    resizeMode: "contain",
    marginTop: 50,
  },
  titleContainer: {
    marginTop: 18,
  },
  title: {
    fontSize: 18,
    lineHeight: 28,
    marginBottom: 13,
  },
  titleAction: {
    color: Colors.dark_grey,
  },
});

export default connect(mapStateToProps)(HeaderSection);
