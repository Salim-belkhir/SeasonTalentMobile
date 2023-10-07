import React from "react";
import { View, Image } from "react-native";
import { Button } from "~/components";


const HomeScreen = ({navigation}) => {
    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Image
            source={require("~/assets/images/logo_SeasonTalent.png")}
            alt="Season Talent"
            />
            <Button
            label="Login"
            type="primary"
            onPress={() => {
                navigation.navigate("details");
            }}
            />
            
      </View>
    );
};

export default HomeScreen;
