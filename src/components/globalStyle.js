import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

body {
background-color: #fbfaf9;
}

ul {
   list-style: none;
}

input {
     border: 0;
}

h1 {
    font-size: 2rem;
    font-weight: 300;
    margin: 0.5em 0;
  }
  
h4 {
    font-size: 1rem;
    font-weight: 300;
    text-transform: uppercase;
    letter-spacing: 0.1875rem;
  }
h6 {
    font-size: 0.9rem;
    font-weight: 400;
    text-transform: uppercase;
}
`;

export default GlobalStyle;
