import { ProfileScreen } from "@/screens/ProfileScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { BottomTabParamList } from "@/navigation/types/BottomTabParamList";
import { HomeStackRoute } from "../stack/HomeStackRoute";
import { CustomAppBar } from "@/components/CustomAppBar";
import { MaterialIcons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator<BottomTabParamList>();

export const BottomTabNavigator = () => (
  <Tab.Navigator
    initialRouteName="HomeTab"
    screenOptions={{
      headerShown: false,
    }}
  >
    <Tab.Screen
      name="HomeTab"
      component={HomeStackRoute}
      options={{
        title: "Home",
        headerShown: false,
        tabBarIcon: ({ color, size }) => (
          <MaterialIcons name="home" size={size} color={color} />
        ),
      }}
    />
    <Tab.Screen
      name="ProfileTab"
      component={ProfileScreen}
      options={{
        title: "Profile",
        tabBarIcon: ({ color, size }) => (
          <MaterialIcons name="person" size={size} color={color} />
        ),
      }}
    />
  </Tab.Navigator>
);
