import React from "react";
import { View } from "react-native";
import { DefaultLayout, FlatList } from "~/components";
import SubscriptionInfoCard from "~/components/SubscriptionInfoCard";
import { ABONNEMENT } from "~/constants/Abonnement";

const SubscriptionDetailsScreen = ({navigation}) => {
    return (
        <DefaultLayout navigation={navigation}>
            <View>

                {Object.keys(ABONNEMENT).map((key) => {
                    return (
                        <SubscriptionInfoCard key={key} subscription={ABONNEMENT[key]} />
                    )
                }
                )}

    

            </View>
        </DefaultLayout>
    )
};


export default SubscriptionDetailsScreen;