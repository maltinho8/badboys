import React from 'react';
import styled from 'styled-components';
import ContentHallOfFame from "../../PagesContent/ContentHallOfFame";

const StyledBody = styled.div`
  
  background-size: cover;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
`;

const ContentContainer = styled.div`
  width: 80%;
  margin: 2rem 0 0 2rem;
  @media screen and (max-width: 768px) {
    width: 85%;
   
  }
`;

const HallOfFame = () => {
  return (
        <StyledBody>
        <ContentContainer>
          <ContentHallOfFame/>
          
        </ContentContainer>
        </StyledBody>

  );
}

export default HallOfFame;
