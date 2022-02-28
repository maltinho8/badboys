import React from 'react';
import './App.css';
import theme, { GlobalStyle } from './Theme';
import { ThemeProvider } from 'styled-components';
import Footer from './components/Footer/index';
import Routing from './components/Router/Router';
import { CenterFocusStrong } from '@material-ui/icons';

const App = () => {

  return (
    
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <div className="background">
      <Routing />
      <Footer />
      </div>
    </ThemeProvider>
    
    
  );
};

export default App;
