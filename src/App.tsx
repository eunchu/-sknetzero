import GlobalStyle from "./global-style";
import RouterConfig from "routers/router";
import { ThemeProvider } from "styled-components";

import { BasicTheme } from "theme";

function App() {
  return (
    <ThemeProvider theme={BasicTheme}>
      <GlobalStyle />
      <RouterConfig />
    </ThemeProvider>
  );
}

export default App;
