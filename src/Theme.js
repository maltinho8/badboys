import {  createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`

 
  body {
    
    font-family: 'Bungee', cursive;
    
  }
  
  html {
    font-size: 100%;
  }

  h1, h2, h3, h4, h5 {
    font-weight: 400;
    
    
  }

  h1 {
    font-weight: 300;
    font-size: 4rem;
  }

  h2 {
    font-size: 1.2rem;
    margin-bottom: 8px;
  }

  h5 {
    font-size: 1rem;
  }

  p {
    font-size: 0.8rem;
  }
`;

const theme = {
  palette: {
    primary: {
      main: '#3D5A80',
      light: '#98C1D9',
      ultraLight: '#E0FBFC',
    },
    secondary: {
      main: '#EE6C4D',
      light: '#F3947C',
    },
    text: {
      main: '#293241',
      light: '#F5F5F5',
    },
    background: {
      dark: '#1E2426',
      light: '#ffffff',
    }
  },
  
  
};

export default theme;
