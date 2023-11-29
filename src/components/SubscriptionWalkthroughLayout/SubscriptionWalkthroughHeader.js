import { Image, StyleSheet, View } from "react-native";

const SubscriptionWalkthroughHeader = ({}) => {
  return (
    <View style={styles.ellipse}>
      <Image
        source={require("~/assets/images/logoSeasonTalent.png")}
        alt="Season Talent"
        style={styles.logoSeasonTalent}
      />
    </View>
  );
};

export default SubscriptionWalkthroughHeader;

const styles = StyleSheet.create({
  ellipse: {
    height: 200,
    backgroundColor: "rgba(14, 152, 140, 0.12)",
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderRadius: 416,
    justifyContent: "center",
    alignItems: "center",
  },
  logoSeasonTalent: {
    width: 180,
    height: 71,
    resizeMode: "contain",
  },
});
