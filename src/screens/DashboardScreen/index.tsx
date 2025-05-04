import { Text, View } from "react-native";
import React from "react";
import { SizedBox } from "@/components/SizedBox";
import { Button } from "react-native-paper";
import { GlobalStyles } from "@/core/styles/GlobalStyles";
import { BaseScreen } from "@/core/BaseScreen";
import { useHomeStackNavigation } from "@/navigation/NavigationHooks";

export const DashboardScreen = () => {
  const navigation = useHomeStackNavigation();
  return (
    <BaseScreen
      appBarProps={{ title: "Dashboard", showDrawer: true, showBack: false }}
    >
      <View style={GlobalStyles.center}>
        <Text>DashboardScreen</Text>
        <SizedBox height={16} />
        <Button
          mode="contained"
          onPress={() => {
            navigation.navigate("ProductListScreen");
          }}
        >
          Product List
        </Button>
      </View>
    </BaseScreen>
  );
};
