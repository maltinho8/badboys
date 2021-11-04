import React from 'react';
import theme, { GlobalStyle } from './Theme';
import styled, { ThemeProvider } from 'styled-components';
import NavBar from './components/NavBar/navbar';





const App = () => {
  return (
    
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <NavBar />
    </ThemeProvider>
   

  );
};

export default App;
