import './App.css';
import React from 'react';
import { HeadlineDrawing }  from "./components/HeadlineDrawing";
import AppBar from "./components/AppBar";
import styled ,{ ThemeProvider }  from 'styled-components';
import theme, { GlobalStyle } from './Theme';
import ContentLandingPage from "./components/ContentLandingPage";



const BallContainer = styled.div`
  position: absolute;
  top: 6rem;
  right: 8rem;
`;

const ContentContainer = styled.div`
  width: 50%;
  margin: 2rem 0 0 4rem;
`;

const App = () => {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <GlobalStyle/>
        <AppBar/>
        <BallContainer>
          <HeadlineDrawing size={500}/>
        </BallContainer>
        <ContentContainer>
          <ContentLandingPage/>
          
        </ContentContainer>
      </ThemeProvider>
      
    </div>
  );
}

export default App;
