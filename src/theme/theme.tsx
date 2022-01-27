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
    // Grayscale
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
    seccess: "#00796B",
  },
  shape: {
    radius: {
      button: "4px",
      button_small: "2px",
    },
  },
};

export { BasicTheme };
