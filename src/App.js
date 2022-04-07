import React from 'react';
import theme, { GlobalStyle } from './Theme';
import { ThemeProvider } from 'styled-components';
import Footer from './components/Footer/index';
import Routing from './components/Router/Router';

const App = () => {

  return (
    
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <div>
      <Routing />
      <Footer />
      </div>
    </ThemeProvider>
    
    
  );
};

export default App;
