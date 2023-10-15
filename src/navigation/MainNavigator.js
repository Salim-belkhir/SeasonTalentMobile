import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Login } from "~/screens";
import MainBottomTabNavigator from "./MainBottomTabNavigator";
import { connect } from "react-redux";
const mapStateToProps = (state) => ({
  isAuthenticated: state.googleAuth.isAuthenticated,
  userInfo: state.googleAuth.userInfo,
});

const Stack = createNativeStackNavigator();

/**
 * Main navigation component for the app.
 * @param {Object} props - Component props.
 * @param {boolean} props.isAuthenticated - Flag indicating if the user is authenticated.
 * @returns {JSX.Element} - Rendered component.
 */
const MainNavigator = ({ isAuthenticated }) => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        // screenOptions={{
        //   headerShown: false,
        //   headerBackTitleVisible: false,
        //   headerStyle: styles.headerStyle,
        //   headerBackTitleStyle: styles.headerBackTitleStyle,
        //   headerLeftContainerStyle: styles.headerLeftContainerStyle,
        //   headerRightContainerStyle: styles.headerRightContainerStyle,
        //   headerBackImage: HeaderBackImage,
        // }}
        // check if the user is authenticated
        screenOptions={{
          headerShown: false,
        }}
      >
        {!isAuthenticated && (
          <Stack.Screen
            name="Login"
            component={Login}
            options={{
              headerTitle: "Login",
              headerShown: false,
            }}
          />
        )}
        <Stack.Screen
          name="MainBottomTabNavigator"
          component={MainBottomTabNavigator}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default connect(mapStateToProps)(MainNavigator);
