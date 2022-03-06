import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body, input, textarea, select, button {

    background: ${props => props.theme.colors.background};
    color:  ${props => props.theme.colors.text};

    font: 400 1rem "Roboto", sans-serif;
  }

  button {
    cursor: pointer;
  }

  a {
    color:inherit ;
    text-decoration: none;
  }
`;
