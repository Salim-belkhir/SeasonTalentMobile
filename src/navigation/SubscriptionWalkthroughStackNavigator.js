import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SubscriptionFirstStepLayout from "~/components/SubscriptionWalkthroughLayout/SubscriptionFirstStepLayout";
import SubscriptionSecondStepLayout from "~/components/SubscriptionWalkthroughLayout/SubscriptionSecondStepLayout";

import React from "react";

const Stack = createNativeStackNavigator();

const SubscriptionWalkthroughStackNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="FirstStep"
                component={SubscriptionFirstStepLayout}
                options={{
                    headerTitle: "FirstStep",
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name="SecondStep"
                component={SubscriptionSecondStepLayout}
                options={{
                    headerTitle: "SecondStep",
                    headerShown: false,
                }}
            />
        </Stack.Navigator>
    );
};
    
export default SubscriptionWalkthroughStackNavigator;