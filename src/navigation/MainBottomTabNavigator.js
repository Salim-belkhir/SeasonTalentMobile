import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "~/components";
import { CandidatesScreen, CompaniesScreen, ProfileScreen } from "~/screens";
import { Colors } from "~/theme";
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
      case "EmploisRecherche":
      case "SearchResults":
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
      initialRouteName="Emplois"
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
        component={CandidatesScreen}
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
        component={CompaniesScreen}
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
