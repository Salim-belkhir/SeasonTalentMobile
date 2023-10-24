import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ProfileHomeScreen, SubscriptionDetailsScreen } from "~/screens";

const Stack = createNativeStackNavigator();

const ProfileNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName="SubscriptionDetails"
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name="ProfileHome" component={ProfileHomeScreen} />
            <Stack.Screen name="SubscriptionDetails" component={SubscriptionDetailsScreen} />
        </Stack.Navigator>
    );
};

export default ProfileNavigator;