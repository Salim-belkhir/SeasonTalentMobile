import AnimatedLottieView from "lottie-react-native";
import { StyleSheet, View } from "react-native";
import Typography from "./Typography";

const Loading = ({ width = 300, height = 300, show, lottieStyle }) => {
  return show ? (
    <View style={[
        styles.container,
        lottieStyle
    ]
    }>
      <AnimatedLottieView
        source={require("~/assets/lotties/loading_animation.json")}
        autoPlay
        loop
        style={{ width, height }}
      />
      <Typography type="l_bold" typographyStyle={styles.loadingText}>
        Chargement...
      </Typography>
    </View>
  ) : null;
};

export default Loading;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  loadingText: {
    marginTop: 20,
    fontSize: 16,
  },
});
