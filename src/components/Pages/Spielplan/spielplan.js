import React from 'react';
import styled from 'styled-components';
import ContentSpielplan from '../../PagesContent/ContentSpielplan/index';

const ContentContainer = styled.div`
  width: 80%;
  margin: 2rem 0 0 2rem;
  @media screen and (max-width: 768px) {
    width: 85%;
   
  }
`;

const Spielplan = () => {
  return (
    
        <ContentContainer>
          <ContentSpielplan/>
        </ContentContainer>
     
  );
}

export default Spielplan;
