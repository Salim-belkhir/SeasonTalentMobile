import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SearchHome, SearchResults } from "~/screens";

const SearchStack = createNativeStackNavigator();

const SearchNavigator = ({ route }) => {
  return (
    <SearchStack.Navigator
      initialRouteName="SearchHome"
      screenOptions={{
        headerShown: false,
      }}
    >
      {/* pass props to the searchHome to define the type of search */}
      <SearchStack.Screen
        name="SearchHome"
        component={SearchHome}
        initialParams={{ type: route.params.type }}
      />
      <SearchStack.Screen name="SearchResults" component={SearchResults} />
    </SearchStack.Navigator>
  );
};

export default SearchNavigator;
