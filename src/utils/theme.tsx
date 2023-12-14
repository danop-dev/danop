import React, { ReactNode } from "react";
import {
  ChakraProvider,
  extendTheme,
  ThemeConfig,
  ColorMode,
} from "@chakra-ui/react";
import { montserrat } from "./fonts";

interface ThemeProviderProps {
  children: ReactNode;
}

const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

interface StyleProps {
  colorMode: ColorMode;
}

export const colors = {
  light: {
    background: "#fff",
    text: "black",
  },
  dark: {
    background: "#000",
    text: "white",
  },
};

const styles = {
  global: (props: StyleProps) => ({
    html: {
      overflow: "hidden",
    },
    body: {
      bg: props.colorMode === "light" ? "light.background" : "dark.background",
      color: props.colorMode === "light" ? "light.text" : "dark.text",
      fontSize: {
        base: "16px",
      },
      fontFamily: montserrat.style.fontFamily,
      transition: "all .3s linear",
    },
  }),
};

const theme = extendTheme({
  config,
  colors: {
    ...colors,
  },
  styles: {
    ...styles,
  },
});

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
};

export default ThemeProvider;
