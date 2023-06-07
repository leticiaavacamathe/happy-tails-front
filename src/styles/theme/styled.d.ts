import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      terciary: string;
      backgroundPrimary: string;
      buttonPrimary: string;
      buttonSecondary: string;
      light: string;
      dark: string;
      fontMainColor: string;
      primaryLight: string;
      correct: string;
      error: string;
    };

    fonts: {
      primary: string;
    };

    fontSizes: {
      small: string;
      medium: string;
      big: string;
    };

    fontWeights: {
      regular: number;
      medium: number;
      bold: number;
    };

    spacing: {
      medium: string;
    };
  }
}
