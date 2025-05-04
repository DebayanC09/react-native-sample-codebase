import { Text, View } from "react-native";
import React from "react";
import { Button } from "react-native-paper";
import { GlobalStyles } from "@/core/styles/GlobalStyles";
import { useTabNavigation } from "@/navigation/NavigationHooks";
import { BaseScreen } from "@/core/BaseScreen";

export const ProfileScreen = ({}) => {
  const navigation = useTabNavigation();

  return (
    <BaseScreen
      appBarProps={{ title: "Profile", showDrawer: true, showBack: false }}
    >
      <View style={GlobalStyles.center}>
        <Text>ProfileScreen</Text>
        <Button
          mode="contained"
          onPress={() => {
            navigation.navigate("HomeTab", {
              screen: "ProductListScreen",
            });
          }}
        >
          Product List
        </Button>
      </View>
    </BaseScreen>
  );
};
