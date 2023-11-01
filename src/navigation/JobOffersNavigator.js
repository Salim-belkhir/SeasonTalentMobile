import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { JobOffersScreen, CreateJobOffer } from "~/screens";
import DetailsJobOffer from "~/screens/jobOffers/DetailsJobOffer";
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
      <Stack.Screen name="EmploisDetails" component={DetailsJobOffer} />
      <Stack.Screen name="EmploisAjouter" component={CreateJobOffer} />
    </Stack.Navigator>
  );
};

export default JobOffersNavigator;
