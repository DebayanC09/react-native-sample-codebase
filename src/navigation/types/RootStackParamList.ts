import { NavigatorScreenParams } from "@react-navigation/native";
import { BottomTabParamList } from "./BottomTabParamList";

export type RootStackParamList = {
  LoginScreen: undefined;
  RegisterScreen: undefined;
  Dashboard?: NavigatorScreenParams<BottomTabParamList>;
};
