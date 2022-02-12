import './LandingPage.css';
import React from 'react';
import styled from 'styled-components';
import ContentLandingPage from '../../PagesContent/ContentLandingPage/index';

const ContentContainer = styled.div`
  width: 100%;
  margin: 2rem 0 0 4rem;
`;


const Homepage = () => {
  return (
    <div>
        <ContentContainer>
          <ContentLandingPage />         
        </ContentContainer>
    </div>


    
  );
}

export default Homepage;
