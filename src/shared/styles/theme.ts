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

export const GlobalStyles = createGlobalStyle<any>`
  @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500;600;700&display=swap');
  *, *::before, *::after {
    box-sizing: border-box;
  }
  * {
    margin: 0;
  }
  html, body {
    height: 100%;
  }
  body {
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    font-family: 'Open Sans', sans-serif !important;
    font-weight: 400 !important;
    font-style: normal;
    background: ${colors.themeBackground} !important;
  }
  img, picture, video, canvas, svg {
    display: block;
    max-width: 100%;
  }
  input, button, textarea, select {
    font: inherit;
  }
  p, h1, h2, h3, h4, h5, h6 {
    overflow-wrap: break-word;
  }
  #root, #__next {
    isolation: isolate;
  }
`
