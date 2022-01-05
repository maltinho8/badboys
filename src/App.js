import React from 'react';
import './App.css';
import theme, { GlobalStyle } from './Theme';
import { ThemeProvider } from 'styled-components';
import NavBar from './components/Bar/NavigationBar/NavigationBar';

const App = () => {

  return (
   
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <NavBar />
    </ThemeProvider>
    
  );
};

export default App;
