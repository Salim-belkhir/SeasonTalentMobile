import React from "react";
import { View, Image } from "react-native";

const App = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Image
        source={require("~/assets/images/logo_SeasonTalent.png")}
        alt="Season Talent"
      />
    </View>
  );
};

export default App;
