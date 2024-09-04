import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
  font-family: 'Varela Round';
  padding: 20px 40px;

  @media screen and (max-width: 1440px) {
    padding: 10px;
  }
}    
 
a {
  text-decoration: none;
  color: black;
}

* {
  box-sizing: border-box;
}
`