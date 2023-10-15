import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import JobOffersScreen from "~/screens/JobOffersScreen";
import CandidatesScreen from "~/screens/CandidatesScreen";
import CompaniesScreen from "~/screens/CompaniesScreen";
import ProfileScreen from "~/screens/ProfileScreen";
import { Icon } from "~/components";
import { Colors } from "~/theme";
const BottomTab = createBottomTabNavigator();

const MainBottomTabNavigator = () => {
  return (
    <BottomTab.Navigator
      initialRouteName="Emplois"
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: Colors.primary_color,
        tabBarInactiveTintColor: Colors.main_grey,
        headerShown: false,
        tabBarLabelStyle: {
          fontSize: 12,
          fontFamily: "Montserrat-Regular",
          fontWeight: "500",
        },
      })}
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
        component={JobOffersScreen}
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
