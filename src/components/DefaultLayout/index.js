import React from "react";
import { TouchableWithoutFeedback } from "react-native";

const DefaultLayout = ({ children, navigation }) => {
  return <TouchableWithoutFeedback>{children}</TouchableWithoutFeedback>;
};

export default DefaultLayout;
