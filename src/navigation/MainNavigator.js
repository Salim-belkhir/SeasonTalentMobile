import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen, Login } from "~/screens";
import React from "react";
import { connect } from "react-redux";
const mapStateToProps = (state) => ({
  isAuthenticated: state.googleAuth.isAuthenticated,
  userInfo: state.googleAuth.userInfo,
});

const Stack = createNativeStackNavigator();

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
        initialRouteName={isAuthenticated ? "Home" : "Login"}
      >
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerTitle: "Login",
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerTitle: "Home",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default connect(mapStateToProps)(MainNavigator);
