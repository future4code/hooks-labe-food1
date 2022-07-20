import GlobalStyle from "./GlobalStyled";
import { Router } from "./routes/Router";
import { ThemeProvider } from "@mui/material";
import theme from "./constants/Theme";
import GlobalState from "./global/GlobalState";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalState>
        <GlobalStyle />
        <Router />
      </GlobalState>
    </ThemeProvider>
  );
};

export default App;
