import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen, Login } from "~/screens";
import React from "react";
import { View, Text } from "react-native";


const DetailsScreen = () => {
    return (
        <View >
        <Text>Details!</Text>
        </View>
    );
    }


const Stack = createNativeStackNavigator();

const MainNavigator = () => {
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
         <Stack.Screen
          name="Details"
          component={DetailsScreen}
          options={{
            headerTitle: "Details",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;
