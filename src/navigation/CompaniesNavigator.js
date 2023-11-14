import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { CompaniesScreen, CreateJobOffer, DetailsJobOffer } from "~/screens";
import SearchNavigator from "./SearchNavigator";

const Stack = createNativeStackNavigator();

const CompaniesNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="CompaniesHome"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="CompaniesHome" component={CompaniesScreen} />
      <Stack.Screen name="CompaniesAjouter" component={CreateJobOffer} />
      <Stack.Screen
        name="CompaniesRecherche"
        component={SearchNavigator}
        initialParams={{ type: "companies" }}
      />
      <Stack.Screen name="CompaniesDetails" component={DetailsJobOffer} />
    </Stack.Navigator>
  );
};

export default CompaniesNavigator;
