import { createGlobalStyle } from "styled-components";

export const colors = {
  white: "#ffffff",
  heroBlue: "#070268",
  dark: "#10152c",
  black: "#000",
  gray: "#b9afaf",
};

export const GlobalStyle = createGlobalStyle`

*::-webkit-scrollbar {
    width: 5px;
    height: 5px;
    background-color:white;
    border-radius: 5px;
  }
  
  *::-webkit-scrollbar-track {
    background-color:white;
    border-radius: 5px;
  }

  *::-webkit-scrollbar-thumb {
    background-color: ${colors.gray};
    border-radius: 5px;
  }

  *{
    margin: 0;
    padding:0;
    box-sizing: border-box;
  }
  
  body{
    min-width: 360px;
    margin: 0 auto;
    font-family: 'Poppins', sans-serif;
  };

  html{
    font-size: 62.5%;
    font-family: sans-serif;
  }
`;