import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
 @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;600;700&display=swap');
 
  body {
    font-family: 'Nunito', sans-serif;
    background: #1E2426;
  }
  
  html {
    font-size: 100%;
  }

  h1, h2, h3, h4, h5 {
    font-weight: 700;
  }

  h1 {
    font-weight: 300;
    font-size: 4rem;
  }

  h2 {
    font-size: 1.7rem;
    margin-bottom: 8px;
  }
`

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
    },
  },
  borderRadius: '8px',
  fonts: ['sans-serif', 'Roboto'],
  fontSizes: {
    small: '1em',
    medium: '2em',
    large: '3em',
  },
}

export default theme
