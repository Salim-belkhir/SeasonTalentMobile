import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProfileScreen from "./ProfileScreen";
import CompaniesScreen from "./companies/CompaniesScreen";

const Stack = createNativeStackNavigator();

const CandidatesScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="CompaniesScreen" component={CompaniesScreen} />
      <Stack.Screen name="Candidates" component={ProfileScreen} />
    </Stack.Navigator>
  );
};

export default CandidatesScreen;
