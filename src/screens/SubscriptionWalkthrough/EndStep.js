import { StyleSheet, View } from "react-native";
import { connect } from "react-redux";
import {
  Button,
  SubscriptionWalkthroughLayout,
  Typography,
} from "~/components";
import { googleSignIn } from "~/redux/actions";
import { Colors } from "~/theme";

const mapDispatchToProps = {
  googleSignIn,
};

const SubscriptionEnd = ({ navigation, route, googleSignIn }) => {
  const handleExplore = () => {
    googleSignIn(route.params.data);
    navigation.navigate("MainBottomTabNavigator");
  };

  return (
    <SubscriptionWalkthroughLayout step={3}>
      <View style={styles.container}>
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
          onPress={handleExplore}
          buttonStyle={styles.button}
          labelTypographyStyle={styles.buttonLabel}
          hideIcon
        />
      </View>
    </SubscriptionWalkthroughLayout>
  );
};

export default connect(null, mapDispatchToProps)(SubscriptionEnd);

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 23,
    backgroundColor: Colors.main_white,
  },
  page: {},
  final_text: {},
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
