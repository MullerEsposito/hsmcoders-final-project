import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    background-color: #c7c7c7;
    color: #FFF;
  }
  
  button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
  
  `