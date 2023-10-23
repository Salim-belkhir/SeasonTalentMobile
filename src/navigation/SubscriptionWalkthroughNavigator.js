import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  SubscriptionFirstStep,
  SubscriptionSecondStep,
  SubscriptionThirdStep,
  SubscriptionEnd,
} from "~/screens";
import React from "react";

const Stack = createNativeStackNavigator();

const SubscriptionWalkthroughNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="FirstStep"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="FirstStep" component={SubscriptionFirstStep} />
      <Stack.Screen name="SecondStep" component={SubscriptionSecondStep} />
      <Stack.Screen name="ThirdStep" component={SubscriptionThirdStep} />
      <Stack.Screen name="End" component={SubscriptionEnd} />
    </Stack.Navigator>
  );
};

export default SubscriptionWalkthroughNavigator;
