import { StyleSheet, View } from "react-native";
import { Colors } from "~/theme";
import DefaultLayout from "../DefaultLayout";
import SubscriptionWalkthroughHeader from "./SubscriptionWalkthroughHeader";
import SubscriptionWalkthroughImage from "./SubscriptionWalkthroughImage";

const steps = [
  {
    image: require("~/assets/images/sub_step1.png"),
    title: "Inscription",
  },

  {
    image: require("~/assets/images/sub_step2.png"),
    title: "Ajoutez un établissemement",
  },

  {
    image: require("~/assets/images/sub_step3.png"),
    title: "Téléchargez des documents",
  },

  {
    image: require("~/assets/images/sub_laststep.png"),
    title: "C'est parti !",
  },
];

const SubscriptionWalkthroughLayout = ({ step, children }) => {
  return (
    <DefaultLayout>
      <View style={styles.container}>
        <SubscriptionWalkthroughHeader />
        <SubscriptionWalkthroughImage
          step={step}
          image={steps[step].image}
          title={steps[step].title}
        />
        <View style={styles.content}>{children}</View>
      </View>
    </DefaultLayout>
  );
};

export default SubscriptionWalkthroughLayout;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.main_white,
  },
  header: {},
});
