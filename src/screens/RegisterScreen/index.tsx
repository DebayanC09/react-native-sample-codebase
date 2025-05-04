import { Text, View } from "react-native";
import React, { useLayoutEffect } from "react";
import { GlobalStyles } from "@/core/styles/GlobalStyles";
import { SizedBox } from "@/components/SizedBox";
import { Button } from "react-native-paper";
import { useRootNavigation } from "@/navigation/NavigationHooks";
import { BaseScreen } from "@/core/BaseScreen";

export const RegisterScreen = () => {
  const navigation = useRootNavigation();

  return (
    <BaseScreen appBarProps={{ title: "Register" }}>
      <View style={GlobalStyles.center}>
        <Text>Register Screen</Text>
        <SizedBox height={16} />
        <Button
          mode="contained"
          onPress={() => {
            navigation.goBack();
          }}
        >
          Back
        </Button>
      </View>
    </BaseScreen>
  );
};
