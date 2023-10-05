import React from "react";
import { View, Text, Image } from "react-native";
import { Button } from "~/components";

const App = () => {
  const handlePress = () => {
    // Handle button press here
    console.log("Button pressed");
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      {/* Example of a primary button */}
      <Button
        label="Primary Button"
        type="primary"
        onPress={handlePress}
        labelType="l_bold"
      />

      {/* Example of a secondary button */}
      <Button
        label="Secondary Button"
        type="secondary"
        onPress={handlePress}
        labelType="l_bold"
      />

      {/* Example of a tertiary button */}
      <Button
        label="Tertiary Button"
        type="tertiary"
        onPress={handlePress}
        labelType="s_bold"
      />

      {/* Example of a delete button */}
      <Button
        label="Delete Button"
        type="delete"
        onPress={handlePress}
        labelType="l_bold"
      />

      {/* Example of a disabled button */}
      <Button
        label="Disabled Button"
        type="primary"
        onPress={handlePress}
        labelType="l_bold"
        disabled={true}
      />

      {/* Example of a button with custom icon */}
      <Button
        label="Custom Icon Button"
        type="primary"
        onPress={handlePress}
        labelType="l_bold"
      />

      {/* Example of a button with custom styling */}
      <Button
        label="Custom Style Button"
        type="primary"
        onPress={handlePress}
        labelType="l_bold"
        buttonStyle={{
          backgroundColor: "red",
          borderColor: "red",
        }}
      />

      {/* You can add more buttons with different configurations */}
    </View>
  );
};

export default App;

// import { useCallback } from "react";
// import { Text, View, StyleSheet } from "react-native";
// import { useFonts } from "expo-font";
// import * as SplashScreen from "expo-splash-screen";

// SplashScreen.preventAutoHideAsync();

// export default function App() {
//   const [fontsLoaded] = useFonts({
//     MontserratBold: require("~/assets/fonts/Montserrat-bold.ttf"),
//     MontserratRegular: require("~/assets/fonts/Montserrat-regular.ttf"),
//   });

//   const onLayoutRootView = useCallback(async () => {
//     if (fontsLoaded) {
//       await SplashScreen.hideAsync();
//     }
//   }, [fontsLoaded]);

//   if (!fontsLoaded) {
//     return null;
//   }

//   return (
//     <View style={styles.container} onLayout={onLayoutRootView}>
//       <Text style={{ fontFamily: "MontserratBold", fontSize: 30 }}>
//         Inter Black
//       </Text>
//       <Text style={{ fontFamily: "MontserratRegular", fontSize: 30 }}>
//         Inter Regular
//       </Text>
//       <Text style={{ fontFamily: "MontserratRegular", fontSize: 30 }}>
//         Platform Default
//       </Text>
//       <Text style={{ fontSize: 30 }}>Platform Default</Text>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//   },
// });
