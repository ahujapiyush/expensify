import { View, Text, StatusBar, Platform } from "react-native";
import React from "react";

function ScreenWrapper({ children }) {
  return <View style={{ padding: 10 }}>{children}</View>;
}

export default ScreenWrapper;
