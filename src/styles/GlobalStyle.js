import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
body {
  display: flex;
  flex-direction: center;
  justify-content: center;
}
.App {
  width: 1000px;
}

`;

export default GlobalStyle;
