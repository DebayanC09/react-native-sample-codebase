import React from "react";
import { View, StyleSheet, ViewStyle } from "react-native";

type SizedBoxProps = {
  width?: number;
  height?: number;
  children?: React.ReactNode;
  style?: ViewStyle;
};

export const SizedBox: React.FC<SizedBoxProps> = ({
  width,
  height,
  children,
  style,
}) => {
  return <View style={[{ width, height }, style]}>{children}</View>;
};
