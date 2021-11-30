import './LandingPage.css';
import React from 'react';
import { HeadlineDrawing } from "../../HeadlineDrawing/index";
import styled, { ThemeProvider } from 'styled-components';
import theme, { GlobalStyle } from '../../../Theme';
import ContentLandingPage from "../../PagesContent/ContentLandingPage";

const BallContainer = styled.div`
  position: absolute;
  top: 6rem;
  right: 8rem;
`;

const ContentContainer = styled.div`
  width: 50%;
  margin: 2rem 0 0 4rem;
`;

const Homepage = () => {
  return (
    <div className="Homepage">
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <BallContainer>
          <HeadlineDrawing size={500} />
        </BallContainer>
        <ContentContainer>
          <ContentLandingPage />
        </ContentContainer>
      </ThemeProvider>

      <div className="HomepageBody">
      <ContentContainer>
          <ContentLandingPage />
        </ContentContainer>
        </div>

        <div className="HomepageBody1">
      <ContentContainer>
          <ContentLandingPage />
        </ContentContainer>
        </div>

        <div className="HomepageBody2">
      <ContentContainer>
          <ContentLandingPage />
        </ContentContainer>
        </div>



    </div>


    
  );
}

export default Homepage;
