import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    orange: {
      "300": "#FFBA08",
    },
    dark: {
      black: "#000000",
      text: "#47585B",
      info: "#999999",
    },
    ligth: {
      white: "#ffffff",
      text: "#F5F8FA",
      info: "#DADADA",
    },
  },
  fonts: {
    heading: "Poppins, sans-serif",
    body: "Poppins, Barlow, sans-serif",
  },
  styles: {
    global: {
      body: {
        bg: "ligth.white",
        color: "dark.text",
      },
    },
  },
});
