import { RootNavigator } from "@/navigation/navigator/RootNavigator";
import { PaperProvider } from "react-native-paper";
import { LightTheme } from "@/core/theme/LightTheme";

export default function App() {
  return (
    <PaperProvider theme={LightTheme}>
      <RootNavigator />
    </PaperProvider>
  );
}
