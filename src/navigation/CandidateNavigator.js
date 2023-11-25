import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { CandidatesScreen, DetailsCandidate } from "~/screens";
import SearchNavigator from "./SearchNavigator";

const Stack = createNativeStackNavigator();

const CandidatesNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="CandidateHome"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="CandidateHome" component={CandidatesScreen} />
      <Stack.Screen
        name="CandidateSearch"
        component={SearchNavigator}
        initialParams={{ type: "Candidates" }}
      />
      <Stack.Screen name="CandidateDetails" component={DetailsCandidate} />
    </Stack.Navigator>
  );
};

export default CandidatesNavigator;
