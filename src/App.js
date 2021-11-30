import React from 'react';
import theme, { GlobalStyle } from './Theme';
import { ThemeProvider } from 'styled-components';
import NavBar from './components/NavigationBar/NavBar/navbar';
import Footer from './components/Footer/index';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <NavBar />
      <Footer />
    </ThemeProvider>
  );
};

export default App;
