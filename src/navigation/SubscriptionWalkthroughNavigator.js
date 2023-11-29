import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { EndStep, FirstStep, SecondStep, ThirdStep } from "~/screens";

const Stack = createNativeStackNavigator();

const SubscriptionWalkthroughNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="FirstStep"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="FirstStep" component={FirstStep} />
      <Stack.Screen name="SecondStep" component={SecondStep} />
      <Stack.Screen name="ThirdStep" component={ThirdStep} />
      <Stack.Screen name="EndStep" component={EndStep} />
    </Stack.Navigator>
  );
};

export default SubscriptionWalkthroughNavigator;
