import React from "react";
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from "@react-navigation/drawer";
import { StyleSheet } from "react-native";
import { useRootNavigation } from "@/navigation/navigator/RootNavigator";

export const CustomDrawerContent = (props: DrawerContentComponentProps) => {
  const rootNavigation = useRootNavigation();

  return (
    <DrawerContentScrollView contentContainerStyle={styles.container}>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Profile"
        onPress={() =>
          props.navigation.navigate("DashboardScreen", {
            screen: "ProfileScreen",
          })
        }
      />
      <DrawerItem
        label="Login"
        onPress={() => rootNavigation.navigate("LoginScreen")}
      />
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
