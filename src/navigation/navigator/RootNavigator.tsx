import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { RootStackRoute } from "../stack/RootStackRoute";

export type DrawerNavigatorParamList = {
  RootStack: undefined; // Adjust the screen params as needed
  // Add other screens if necessary
};


const Drawer = createDrawerNavigator<DrawerNavigatorParamList>();

export const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{ headerShown: false, swipeEnabled: false }}
        initialRouteName="RootStack"
      >
        <Drawer.Screen name="RootStack" component={RootStackRoute} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};
