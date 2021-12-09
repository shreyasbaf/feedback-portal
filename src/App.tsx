import { ThemeProvider } from "styled-components";
import { theme, GlobalStyle } from "../src/shared/styles/theme";

import Routes from "./shared/components/routes/Routes";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Routes />
    </ThemeProvider>
  );
}

export default App;
