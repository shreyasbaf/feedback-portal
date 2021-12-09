import { createGlobalStyle } from "styled-components";

export interface Colors {
  themeBackground: string;
  // white: string;
  // farmCardBackground: string;
  // green: string;
  // base: string;
  // black: string;
  // greenGradient: string;
  // yellowGradient: string;
  // yellow: string;
  // whiteGradient: string;
  // neon: string;
  // buttonColor: string;
}

export const colors: Colors = {
  themeBackground:
    "linear-gradient(90deg, rgba(249,179,203,1) 0%, rgba(225,163,225,1) 35%, rgba(196,145,251,1) 100%)",
  // white: "#ffffff",
  // farmCardBackground: "#2E293F",
  // neon: "#00D7E7",
  // green: "#01D14E",
  // base: "#1F1D29",
  // black: "#1D1A28",
  // greenGradient: "#04A73F",
  // yellow: "#FBEC5B",
  // yellowGradient: "#EBDC47",
  // whiteGradient: "#C4C4C4",
  // buttonColor: "#00D7E7",
};

export interface ThemeStarter {
  [propName: string]: string | undefined;
  themeBackground: string;
  // white: string;
  // farmCardBackground: string;
  // green: string;
  // greenGradient: string;
  // base: string;
  // black: string;
  // yellowGradient: string;
  // yellow: string;
  // whiteGradient: string;
  // neon: string;
  // buttonColor: string;
}

export const theme: ThemeStarter = {
  themeBackground: colors.themeBackground,
  // white: colors.white,
  // farmCardBackground: colors.farmCardBackground,
  // green: colors.green,
  // base: colors.base,
  // black: colors.black,
  // greenGradient: colors.greenGradient,
  // yellowGradient: colors.yellowGradient,
  // yellow: colors.yellow,
  // whiteGradient: colors.whiteGradient,
  // neon: colors.neon,
  // buttonColor: colors.buttonColor,
};

export interface ScreenSizes {
  mediaS: number;
  mediaM: number;
  mediaL: number;
  mediaXL: number;
  mediaXXL: number;
  mediaLX: number;
  mediaLXX: number;
}
export const screenSizes: ScreenSizes = {
  mediaS: 640,
  mediaM: 800,
  mediaL: 1024,
  mediaXL: 1280,
  mediaXXL: 1480,
  mediaLX: 1800,
  mediaLXX: 2000,
};

export const GlobalStyle = createGlobalStyle`

body {
  background: ${colors.themeBackground} !important;
  /* background: #090D24 !important; */
}



`;
