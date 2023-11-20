import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  CompaniesScreen,
  CreateCompanyScreen,
  DetailsCompanyScreen
} from "~/screens";

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
      <Stack.Screen name="CompanyCreation" component={CreateCompanyScreen} />
      <Stack.Screen name="CompanyDetails" component={DetailsCompanyScreen} />
    </Stack.Navigator>
  );
};

export default CompaniesNavigator;
