import { createGlobalStyle } from "styled-components";
import background from "../assets/background.jpg";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box
  }

  body, input, button {
    font: 1rem Roboto, sans-serif;
  }

  body {
    background-image: url(${background});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    background-attachment: fixed;
  }

  button {
    cursor: pointer;
  }
`;