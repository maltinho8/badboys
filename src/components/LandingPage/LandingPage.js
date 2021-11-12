import './LandingPage.css';
import React from 'react';
import { HeadlineDrawing } from '../HeadlineDrawing/index';
import styled, { ThemeProvider } from 'styled-components';
import theme, { GlobalStyle } from '../../Theme';
import ContentLandingPage from '../ContentLandingPage';

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
    </div>
  );
};

export default Homepage;
