
import React from 'react';
import styled from 'styled-components';
import ContentSpielplan from '../../PagesContent/ContentSpielplan/index';

const ContentContainer = styled.div`
  width: 50%;
  margin: 2rem 0 0 4rem;
`;

const Spielplan = () => {
  return (
    
        <ContentContainer>
          <ContentSpielplan/>
        </ContentContainer>
     
  );
}

export default Spielplan;
