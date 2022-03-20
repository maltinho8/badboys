import {  createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`

 
  body {
    
    font-family: 'Roboto', sans-serif;
    
  }
  
  html {
    font-size: 100%;
  }

 

  h1 {
    font-weight: 200;
    font-size: 4rem;
  }

  h2 {
    font-size: 1.2rem;
    margin-bottom: 8px;
  }

  h4 {
    font-size: 5rem;
    font-weight: 600;
    font-family: 'Graduate', cursive;
  }

  h5 {
    font-size: 0.8rem;
    
  }

  p {
    font-size: 1rem;
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
