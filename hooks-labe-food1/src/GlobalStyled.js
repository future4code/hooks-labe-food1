import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  *{
    margin: 0;
    padding: 0;
    font-family: Roboto-Regular, Roboto  ;
    font-size: 16px;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;  
    box-sizing: border-box;
  }

h3 {
    font-weight: bold;
    color: #000;
}

h1 {
    font-weight: normal;
    text-align: center;
    color: #000;
}

h2 {
    font-weight: normal;
    color:#e86e5a;
}

h4{
  color: #b8b8b8;
  font-weight: normal;
}

`;

export default GlobalStyle;
