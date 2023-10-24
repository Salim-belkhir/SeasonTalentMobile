import React from "react";
import { DefaultLayout, ItemFlatList, NavigatorButton, SearchJobOffer } from "~/components";
import { View } from "react-native";



const ProfileHomeScreen = ({ navigation, googleSignOut }) => {
    return (
        <DefaultLayout navigation={navigation}>
            <View>
                <NavigatorButton label="Voyager" navigate={() => navigation.push("Login")}></NavigatorButton>
                <ItemFlatList item={{logo: "~/assets/images/logo_SeasonTalent.png", title: "Season Talent", duration: "2021", location: "Montpellier"}} />
            </View>
        </DefaultLayout>
    );
}

export default ProfileHomeScreen;