import { BottomTabParamList } from "@/navigation/types/BottomTabParamList";
import { HomeStackParamList } from "@/navigation/types/HomeStackParamList";
import { RootStackParamList } from "@/navigation/types/RootStackParamList";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export const useRootNavigation = () =>
  useNavigation<NativeStackNavigationProp<RootStackParamList>>();

export const useTabNavigation = () =>
  useNavigation<BottomTabNavigationProp<BottomTabParamList>>();

export const useHomeStackNavigation = () =>
  useNavigation<NativeStackNavigationProp<HomeStackParamList>>();
