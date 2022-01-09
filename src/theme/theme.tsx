import { Theme } from "styled-components";

const BasicTheme: Theme = {
  color: {
    // Primary
    primary_900: "#004D40",
    primary_800: "#00695C",
    primary_700: "#00796B",
    primary_600: "#00897B",
    primary_500: "#009688",
    primary_400: "#26A69A",
    primary_300: "#4DB6AC",
    primary_200: "#80CBC4",
    primary_100: "#B2DFDB",
    primary_50: "#E0F2F1",
    // Secondary_red
    secondary_red_900: "#A14033",
    secondary_red_800: "#B2463B",
    secondary_red_700: "#C04C41",
    secondary_red_600: "#D25548",
    secondary_red_500: "#E05D4A",
    secondary_red_400: "#DD675F",
    secondary_red_300: "#D4807D",
    secondary_red_200: "#E2A2A1",
    secondary_red_100: "#F6D1D5",
    secondary_red_50: "#FBEDEF",
    // Secondary_blue
    secondary_blue_900: "#335DA1",
    secondary_blue_800: "#3B7EC4",
    secondary_blue_700: "#408FD9",
    secondary_blue_600: "#45A2EE",
    secondary_blue_500: "#48B1FE",
    secondary_blue_400: "#50BDFF",
    secondary_blue_300: "#66C9FF",
    secondary_blue_200: "#8DD8FF",
    secondary_blue_100: "#B9E8FF",
    secondary_blue_50: "#E3F6FF",
    // Gray
    gray_900: "#212121",
    gray_800: "#424242",
    gray_700: "#616161",
    gray_600: "#757575",
    gray_500: "#9E9E9E",
    gray_400: "#BDBDBD",
    gray_300: "#E0E0E0",
    gray_200: "#EEEEEE",
    gray_100: "#F5F5F5",
    gray_50: "#FAFAFA",
    // White
    white: "#ffffff",
    // etc
    error: "#F55254",
    warning: "#F59033",
  },
  shape: {
    radius: {
      button: "4px",
      button_small: "2px",
    },
  },
};

export { BasicTheme };
