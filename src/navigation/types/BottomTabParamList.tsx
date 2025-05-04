import { NavigatorScreenParams } from "@react-navigation/native";
import { HomeStackParamList } from "./HomeStackParamList";

export type BottomTabParamList = {
  HomeTab: NavigatorScreenParams<HomeStackParamList>;
  ProfileTab: undefined;
};
