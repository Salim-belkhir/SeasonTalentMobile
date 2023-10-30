import React from "react";
import { Keyboard, TouchableWithoutFeedback } from "react-native";
import { Colors } from "~/theme";

const DefaultLayout = ({ children, navigation }) => {
  return (
    <TouchableWithoutFeedback
      style={{ backgroundColor: Colors.main_white }}
      onPress={Keyboard.dismiss}
    >
      {children}
    </TouchableWithoutFeedback>
  );
};

export default DefaultLayout;
