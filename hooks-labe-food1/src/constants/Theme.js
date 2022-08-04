import { createTheme } from "@mui/material";
import { neutralBlack, lightGray, darkPeach } from "./Colors";


const theme = createTheme({
  palette: {
    primary:{
      main:darkPeach,
      contrastText: "black"
    },
    secundary:{ main:neutralBlack,},
    info:{main: lightGray}},
  text: {
    primary:neutralBlack,
    secundary:lightGray
  }

  },
);

export default theme