import "styled-components";

declare module "styled-components" {
  export interface Theme {
    color: {
      // Primary
      primary_900: string;
      primary_800: string;
      primary_700: string;
      primary_600: string;
      primary_500: string;
      primary_400: string;
      primary_300: string;
      primary_200: string;
      primary_100: string;
      primary_50: string;
      // Secondary_red
      secondary_red_900: string;
      secondary_red_800: string;
      secondary_red_700: string;
      secondary_red_600: string;
      secondary_red_500: string;
      secondary_red_400: string;
      secondary_red_300: string;
      secondary_red_200: string;
      secondary_red_100: string;
      secondary_red_50: string;
      // Secondary_blue
      secondary_blue_900: string;
      secondary_blue_800: string;
      secondary_blue_700: string;
      secondary_blue_600: string;
      secondary_blue_500: string;
      secondary_blue_400: string;
      secondary_blue_300: string;
      secondary_blue_200: string;
      secondary_blue_100: string;
      secondary_blue_50: string;
      // Gray
      gray_900: string;
      gray_800: string;
      gray_700: string;
      gray_600: string;
      gray_500: string;
      gray_400: string;
      gray_300: string;
      gray_200: string;
      gray_100: string;
      gray_50: string;
      // White
      white: string;
      // etc
      error: string;
      warning: string;
    };
    shape: {
      radius: {
        button: string;
        button_small: string;
      };
    };
  }
}
