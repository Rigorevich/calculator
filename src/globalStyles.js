import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-family: Open-Sans, Helvetica, Sans-Serif;
    box-sizing: border-box;
  }

  body {
    background-color: ${(props) => props.theme.primaryBackground};
    color: ${(props) => props.theme.primaryText};
  }

  ul {
    list-style: none;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;
