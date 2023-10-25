import React from "react";
import { TouchableWithoutFeedback } from "react-native";
import { Colors } from "~/theme";

const DefaultLayout = ({ children, navigation }) => {
  return (
    <TouchableWithoutFeedback style={{ backgroundColor: Colors.main_white }}>
      {children}
    </TouchableWithoutFeedback>
  );
};

export default DefaultLayout;
