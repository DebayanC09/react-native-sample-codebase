import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { CustomAppBar } from "@/components/CustomAppBar";
import { DashboardScreen } from "@/screens/DashboardScreen";
import { HomeStackParamList } from "../types/HomeStackParamList";
import { ProductListScreen } from "@/screens/ProductListScreen";

const Stack = createNativeStackNavigator<HomeStackParamList>();

export const HomeStackRoute = () => {
  return (
    <Stack.Navigator
      initialRouteName="DashboardScreen"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="DashboardScreen" component={DashboardScreen} />
      <Stack.Screen name="ProductListScreen" component={ProductListScreen} />
    </Stack.Navigator>
  );
};
