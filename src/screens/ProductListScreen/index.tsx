import { Text, View } from "react-native";
import { GlobalStyles } from "@/core/styles/GlobalStyles";
import { BaseScreen } from "@/core/BaseScreen";

export const ProductListScreen = () => {
  return (
    <BaseScreen appBarProps={{ title: "Product List" }}>
      <View style={GlobalStyles.center}>
        <Text>Product List Screen</Text>
      </View>
    </BaseScreen>
  );
};
