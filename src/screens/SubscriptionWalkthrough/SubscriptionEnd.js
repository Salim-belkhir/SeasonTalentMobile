import React from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import DefaultLayout from "~/components/DefaultLayout";
import HeaderSection from "~/components/SubscriptionWalkthroughLayout/HeaderSection";
import { Typography, Button } from "~/components";
import { Colors } from "~/theme";

const SubscriptionEnd = ({ navigation }) => {
  return (
    <DefaultLayout>
      <View style={styles.container}>
        <HeaderSection />
        <View style={styles.page}>
          <View style={styles.schema_view}>
            <Image
              source={require("~/assets/images/sub_laststep.png")}
              alt="Schéma d'illustration"
              style={styles.schema}
            />
          </View>
          <View style={styles.final_text}>
            <Typography type="l_medium" typographyStyle={styles.title}>
              Saisonniers{"\n"}
              {"\n"}Connectés{"\n"}
            </Typography>

            <Typography type="s_bold" typographyStyle={styles.sub_title}>
              Votre{" "}
              <Typography type="s_bold" typographyStyle={styles.sub_title_1}>
                Emploi
              </Typography>{" "}
              !
            </Typography>

            <Typography type="s_bold" typographyStyle={styles.sub_title}>
              Votre{" "}
              <Typography type="s_bold" typographyStyle={styles.sub_title_2}>
                Saison
              </Typography>{" "}
              !
            </Typography>
          </View>

          <Button
            label="Explorez"
            buttonStyle={styles.button}
            labelTypographyStyle={styles.buttonLabel}
            hideIcon
          />
        </View>
      </View>
    </DefaultLayout>
  );
};

export default SubscriptionEnd;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 33,
    backgroundColor: Colors.main_white,
  },
  page: {
    flex: 1,
  },
  schema_view: {
    marginTop: 46,
    justifyContent: "center",
    alignItems: "center",
  },
  schema: {
    width: 296,
    height: 256,
    resizeMode: "contain",
  },
  final_text: {
    marginTop: 46,
  },
  title: {
    fontSize: 26,
    paddingTop: 5,
  },
  sub_title: {
    fontSize: 36,
    paddingTop: 20,
  },
  sub_title_1: {
    color: Colors.greenBlue,
    fontSize: 36,
  },
  sub_title_2: {
    color: Colors.blue,
    fontSize: 36,
  },
  button: {
    marginTop: 56,
  },
  buttonLabel: {
    color: Colors.main_white,
  },
});
