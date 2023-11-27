import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "~/components";
import { ProfileScreen } from "~/screens";
import { Colors } from "~/theme";
import CandidatesNavigator from "./CandidateNavigator";
import CompaniesNavigator from "./CompaniesNavigator";
import JobOffersNavigator from "./JobOffersNavigator";
const BottomTab = createBottomTabNavigator();

const MainBottomTabNavigator = () => {
  const handleScreenListeners = ({ navigation }) => {
    const recursivelyFindRouteName = ({ routes, index }) => {
      if (routes[index].state) {
        return recursivelyFindRouteName(routes[index].state);
      } else {
        return routes[index].name;
      }
    };

    const currentScreen = recursivelyFindRouteName(navigation.getState());
    // Use a switch case to handle different screen names
    switch (currentScreen) {
      case "Emplois":
        // check if the screen that we are coming from is EmploisDetails after CompanyDetails
        const isComingFromEmploisDetails =
          navigation.getState().routes[1].params?.screen === "EmploisDetails";

        if (isComingFromEmploisDetails) {
          navigation.setOptions({
            tabBarStyle: { display: "none" },
          });
        }
        break;
      case "CandidateDetails":
      case "CandidateSearch":
      case "CompanyCreation":
      case "CompanyDetails":
      case "EmploisRecherche":
      case "SearchResults":
      case "SearchHome":
      case "EmploisDetails":
      case "EmploisAjouter":
        navigation.setOptions({
          tabBarStyle: { display: "none" },
        });
        break;
      default:
        navigation.setOptions({ tabBarStyle: { display: "flex" } });
        break;
    }
  };

  return (
    <BottomTab.Navigator
      initialRouteName="Candidats"
      screenOptions={{
        tabBarActiveTintColor: Colors.primary_color,
        tabBarInactiveTintColor: Colors.main_grey,
        headerShown: false,
        tabBarLabelStyle: {
          fontSize: 12,
          fontFamily: "Montserrat-Regular",
          fontWeight: "500",
        },
      }}
      screenListeners={handleScreenListeners}
      setOptions={{
        headerShown: false,
      }}
    >
      <BottomTab.Screen
        name="Candidats"
        component={CandidatesNavigator}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="rocket1" size={size} color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Emplois"
        component={JobOffersNavigator}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="appstore-o" size={size} color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Établissements"
        component={CompaniesNavigator}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="home" size={size} color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Profil"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="user" size={size} color={color} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
};

export default MainBottomTabNavigator;
