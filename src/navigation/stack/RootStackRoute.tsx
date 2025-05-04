import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { LoginScreen } from "@/screens/LoginScreen";
import { RegisterScreen } from "@/screens/RegisterScreen";
import { RootStackParamList } from "@/navigation/types/RootStackParamList";
import { CustomAppBar } from "@/components/CustomAppBar";
import { BottomTabNavigator } from "@/navigation/navigator/BottomTabNavigator";

const Stack = createNativeStackNavigator<RootStackParamList>();

export const RootStackRoute = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
      <Stack.Screen name="Dashboard" component={BottomTabNavigator} />
    </Stack.Navigator>
  );
};
