import './LandingPage.css';
import React from 'react';
import { HeadlineDrawing } from "../../HeadlineDrawing/Index";
import styled from 'styled-components';
import ContentLandingPage from "../../PagesContent/ContentLandingPage/Index";

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
    <div>
      
        <BallContainer>
          <HeadlineDrawing size={500} />
        </BallContainer>
        <ContentContainer>
          <ContentLandingPage />
        </ContentContainer>

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
