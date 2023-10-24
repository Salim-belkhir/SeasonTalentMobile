import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import JobOffersNavigator from "./JobOffersNavigator";
import { CandidatesScreen, CompaniesScreen, ProfileScreen } from "~/screens";
import { Icon } from "~/components";
import { Colors } from "~/theme";
import ProfileNavigator from "./ProfileNavigator";
const BottomTab = createBottomTabNavigator();

const MainBottomTabNavigator = () => {
  const handleScreenListeners = ({ navigation, route }) => {
    const recursivelyFindRouteName = ({ routes, index }) => {
      if (routes[index].state) {
        return recursivelyFindRouteName(routes[index].state);
      } else {
        return routes[index].name;
      }
    };
    const currentScreen = recursivelyFindRouteName(navigation.getState());

    // TODO: change it by a switch case
    if (
      currentScreen === "EmploisDetails" ||
      currentScreen === "EmploisAjouter"
    ) {
      navigation.setOptions({ tabBarStyle: { display: "none" } });
    } else {
      navigation.setOptions({ tabBarStyle: { display: "flex" } });
    }
  };

  return (
    <BottomTab.Navigator
      initialRouteName="Emplois"
      screenOptions={({ route }) => {
        return {
          tabBarActiveTintColor: Colors.primary_color,
          tabBarInactiveTintColor: Colors.main_grey,
          headerShown: false,
          tabBarLabelStyle: {
            fontSize: 12,
            fontFamily: "Montserrat-Regular",
            fontWeight: "500",
          },
        };
      }}
      screenListeners={handleScreenListeners}
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
        component={ProfileNavigator}
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
