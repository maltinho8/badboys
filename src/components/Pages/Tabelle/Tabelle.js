import React from 'react';
import styled from 'styled-components';
import ContentTabelle from '../../PagesContent/ContentTabelle/index';

const ContentContainer = styled.div`
width: 100vwimportant!;
margin: 0 auto;
margin-top: 5rem;
padding: 2rem; 
`;


const Tabelle = () => {

  return (
        <ContentContainer>
          <ContentTabelle/>
        </ContentContainer>
  );
}

export default Tabelle;
