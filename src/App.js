import React from 'react';
import './App.css';
import theme, { GlobalStyle } from './Theme';
import { ThemeProvider } from 'styled-components';
import Footer from './components/Footer/Index';
import Routing from './components/Router/Router';

const App = () => {

  return (
   
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Routing />
      <Footer />
    </ThemeProvider>
    
  );
};

export default App;
