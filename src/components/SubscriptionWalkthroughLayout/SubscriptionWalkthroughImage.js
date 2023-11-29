import { Image, StyleSheet, View } from "react-native";
import { Colors } from "~/theme";
import Typography from "../Typography";

const SubscriptionWalkthroughImage = ({ step, image, title }) => {
  let actualStep = step;

  return (
    <View style={styles.progressifContainer}>
      <View style={styles.progression}>
        {[...Array(3)].map((_, index) => (
          <View
            key={index}
            style={[
              styles.normal_step,
              index === actualStep && styles.actual_step,
              index === 3 && { backgroundColor: Colors.primary_color },
            ]}
          />
        ))}
      </View>
      <Image
        source={image}
        alt="Season Talent"
        style={styles.logoSeasonTalent}
      />
      <Typography type="l_bold" typographyStyle={styles.title}>
        {title}
      </Typography>
    </View>
  );
};

export default SubscriptionWalkthroughImage;

const styles = StyleSheet.create({
  progressifContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  progression: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  normal_step: {
    width: 15,
    height: 8,
    borderRadius: 4,
    marginLeft: 5,
    backgroundColor: Colors.main_grey,
  },
  actual_step: {
    width: 30,
    height: 8,
    borderRadius: 4,
    marginLeft: 5,
    backgroundColor: Colors.primary_color,
  },

  logoSeasonTalent: {
    width: 284,
    height: 284,
    resizeMode: "contain",
  },

  title: {
    color: Colors.dark_grey,
    fontSize: 15,
    marginBottom: 20,
  },
});
