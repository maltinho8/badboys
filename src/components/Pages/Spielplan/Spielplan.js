import React from 'react';
import styled from 'styled-components';
import ContentSpielplan from '../../PagesContent/ContentSpielplan/index';

const ContentContainer = styled.div`
width: 100vwimportant!;
margin: 0 auto;
padding: 2rem;
`;

const Spielplan = () => {
  return (
    
        <ContentContainer>
          <ContentSpielplan/>
        </ContentContainer>
     
  );
}

export default Spielplan;
