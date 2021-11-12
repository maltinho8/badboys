import './LandingPage.css';
import React from 'react';
import { HeadlineDrawing } from '../HeadlineDrawing/index';
import styled, { ThemeProvider } from 'styled-components';
import theme, { GlobalStyle } from '../../Theme';
import ContentLandingPage from '../ContentLandingPage';
import axios from 'axios';

const url = 'http://localhost:8080/api';

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
  const getTeam = async () => {
    const res = await axios.get(url);
    console.log(res)

  };


  getTeam();

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
