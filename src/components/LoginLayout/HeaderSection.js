import { StyleSheet, View, Image } from "react-native";
import React from "react";
import { Button, Typography } from "~/components";
import { Colors } from "~/theme";

const HeaderSection = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Image
        source={require("~/assets/images/logo_SeasonTalent.png")}
        alt="Season Talent"
      />
      <Typography type="l_bold" typographyStyle={styles.title}>
        Login
      </Typography>
      <Button label="Login" onPress={() => {navigation.navigate("details")}} />
    </View>
  );
};

export default HeaderSection;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 24,
  },
  input: {
    width: "80%",
    height: 48,
    backgroundColor: Colors.white,
    borderColor: Colors.gray,
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
  },
  button: {
    backgroundColor: Colors.primary,
    height: 48,
    width: "80%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
  },
  buttonText: {
    color: Colors.white,
  },
});
