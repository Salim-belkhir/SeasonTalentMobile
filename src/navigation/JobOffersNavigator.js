import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { CreateJobOffer, DetailsJobOffer, JobOffersScreen } from "~/screens";
import SearchNavigator from "./SearchNavigator";

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
      <Stack.Screen name="EmploisAjouter" component={CreateJobOffer} />
      <Stack.Screen
        name="EmploisRecherche"
        component={SearchNavigator}
        initialParams={{ type: "jobOffers" }}
      />
      <Stack.Screen name="EmploisDetails" component={DetailsJobOffer} />
    </Stack.Navigator>
  );
};

export default JobOffersNavigator;
