import { Text, View } from "react-native";
import { GlobalStyles } from "@/core/styles/GlobalStyles";
import { Button } from "react-native-paper";
import { SizedBox } from "@/components/SizedBox";
import { useRootNavigation } from "@/navigation/NavigationHooks";
import { BaseScreen } from "@/core/BaseScreen";

export const LoginScreen = () => {
  const rootNavigation = useRootNavigation();

  return (
    <BaseScreen appBarProps={{ showHeader: false }}>
      <View style={GlobalStyles.center}>
        <Text>Login Screen</Text>
        <SizedBox height={16} />
        <Button
          mode="contained"
          onPress={() => {
            rootNavigation.reset({
              index: 0,
              routes: [{ name: "Dashboard" }],
            });
          }}
        >
          Home
        </Button>
        <SizedBox height={16} />
        <Button
          mode="contained"
          onPress={() => {
            rootNavigation.navigate("RegisterScreen");
          }}
        >
          Register
        </Button>
        <SizedBox height={16} />
        <Button
          mode="contained"
          onPress={() => {
            rootNavigation.navigate("Dashboard", {
              screen: "HomeTab",
              params: {
                screen: "ProductListScreen",
              },
            });
          }}
        >
          Product List
        </Button>
      </View>
    </BaseScreen>
  );
};
