import {createGlobalStyle} from 'styled-components'

export interface Colors {
  themeBackground: string
}

export const colors: Colors = {
  themeBackground:
    'linear-gradient(90deg, rgba(249,179,203,1) 0%, rgba(225,163,225,1) 35%, rgba(196,145,251,1) 100%)',
}

export interface ThemeStarter {
  [propName: string]: string | undefined
  themeBackground: string
}

export const theme: ThemeStarter = {
  themeBackground: colors.themeBackground,
}

export interface ScreenSizes {
  mediaS: number
  mediaM: number
  mediaL: number
  mediaXL: number
  mediaXXL: number
  mediaLX: number
  mediaLXX: number
}
export const screenSizes: ScreenSizes = {
  mediaS: 640,
  mediaM: 800,
  mediaL: 1024,
  mediaXL: 1280,
  mediaXXL: 1480,
  mediaLX: 1800,
  mediaLXX: 2000,
}

export const GlobalStyle = createGlobalStyle`

body {
  background: ${colors.themeBackground} !important;
  /* background: #090D24 !important; */
}



`
