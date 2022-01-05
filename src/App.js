import React from 'react';
import './App.css';
import theme, { GlobalStyle } from './Theme';
import { ThemeProvider } from 'styled-components';
<<<<<<< HEAD
import NavBar from './components/Bar/NavigationBar/NavigationBar';
=======
import NavBar from './components/NavigationBar/NavBar/navbar';
import Footer from './components/Footer/index';
>>>>>>> 63060fb455f7cb75cca13c028fa88c71a1c58b34

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
