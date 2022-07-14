import GlobalStyle from "./GlobalStyled";
import { Router } from "./routes/Router";
import { ThemeProvider,  } from "@mui/material"
import theme from "./constants/Theme";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle/>    
      <Router/> 
    </ThemeProvider>
  );
}

export default App;
