import { Appbar } from "react-native-paper";
import {
  useNavigation,
  DrawerActions,
  useFocusEffect,
} from "@react-navigation/native";
import { useCallback } from "react";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import { DrawerNavigatorParamList } from "@/navigation/navigator/RootNavigator";

export interface CustomAppBarProps {
  showHeader?: boolean;
  title?: string;
  showDrawer?: boolean;
  showBack?: boolean;
}

export const CustomAppBar = ({
  showHeader = true,
  title,
  showDrawer = false,
  showBack = true,
}: CustomAppBarProps) => {
  const navigation =
    useNavigation<DrawerNavigationProp<DrawerNavigatorParamList>>();

  const getDrawerParent = (
    navigation: DrawerNavigationProp<DrawerNavigatorParamList>
  ) => {
    let parent = navigation.getParent();
    while (parent) {
      console.log("Parent:", parent.getState().type);

      if (parent.getState()?.type === "drawer") {
        return parent;
      }
      parent = parent.getParent();
    }
    return null;
  };

  const setSwipeEnabled = (isEnabled: boolean) => {
    const drawer = getDrawerParent(navigation);
    if (drawer) {
      drawer.setOptions({
        swipeEnabled: isEnabled,
      });
    }
  };

  useFocusEffect(
    useCallback(() => {
      if (showDrawer) {
        setSwipeEnabled(true);
        return () => setSwipeEnabled(false);
      }
    }, [navigation, showDrawer])
  );

  return showHeader ? (
    <Appbar.Header>
      {showDrawer ? (
        <Appbar.Action
          icon="menu"
          onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
        />
      ) : null}
      {showBack ? (
        <Appbar.BackAction onPress={() => navigation.goBack()} />
      ) : null}
      <Appbar.Content title={title} />
    </Appbar.Header>
  ) : null;
};
