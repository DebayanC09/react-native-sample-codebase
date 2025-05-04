import { AppColors } from "@/utils/AppColors";
import { DefaultTheme } from "react-native-paper";
import { ThemeProp } from "react-native-paper/lib/typescript/types";
import { AppThemeModel } from "@/core/theme/AppThemeModel";

const theme: ThemeProp = {
  ...DefaultTheme,
  roundness: 5,

  colors: {
    ...DefaultTheme.colors,
    primary: AppColors.Black, // Button
    onPrimary: AppColors.White, // Button text
    primaryContainer: AppColors.Black, // Fab
    onPrimaryContainer: AppColors.White, // Fab icon

    background: AppColors.White, // Text input Background
    surface: AppColors.White, // AppBar Background
    onSurface: AppColors.Black, // App bar text

    onSurfaceVariant: AppColors.Black, // App bar icon, text input place holder
    outline: AppColors.Black, // Text input border,

    outlineVariant: AppColors.Black, // Divider color
  },
};

export const LightTheme: AppThemeModel = {
  ...theme,
  colors: {
    ...theme.colors,
    appBackground: AppColors.White,
    cardBackground: AppColors.White,
  },
};
