import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { JobOffersScreen, CreateJobOffer } from "~/screens";
const Stack = createNativeStackNavigator();

const JobOffersNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="EmploisHome"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="EmploisHome" component={JobOffersScreen} />
      <Stack.Screen name="EmploisDetails" component={JobOffersScreen} />
      <Stack.Screen name="EmploisAjouter" component={CreateJobOffer} />
    </Stack.Navigator>
  );
};

export default JobOffersNavigator;
