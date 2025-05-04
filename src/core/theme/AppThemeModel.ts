import {ThemeProp} from 'react-native-paper/lib/typescript/types';

export type AppThemeModel = ThemeProp & {
  colors: ThemeProp['colors'] & {
    appBackground: string;
    cardBackground: string;
  };
};
