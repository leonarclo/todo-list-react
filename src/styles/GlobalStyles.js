import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
  } 

  * , button, input {
    font-family: 'Poppins', sans-serif;
    text-decoration: none;
    border: none;
    outline: none;
  }

  button {
    cursor: pointer;
  }

  :root {
    --white: #ededed;
    --primary-blue: #083A50;
    --secondary-blue: #64FFDA;
    --grey: #999999; 
    --red: #ff4f4f;
  }

  body {
    background-color: var(--primary-blue);
  }

`;
