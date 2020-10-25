import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Work+Sans:wght@200;300;400;500;600&display=swap');

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
background-color: #fbfaf9;
font-family: "Work Sans", sans-serif;
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
h5 {
    font-size: 0.9rem;
    font-weight: 400;
    text-transform: uppercase;
}
h6 {
    font-size: 0.75rem;
    text-transform: uppercase;
}

p{
  font-size: 0.5rem;
}
`;

export default GlobalStyle;
