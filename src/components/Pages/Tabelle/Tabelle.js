import React from 'react';
import styled from 'styled-components';
import ContentTabelle from '../../PagesContent/ContentTabelle/index';

const ContentContainer = styled.div`
  width: 80%;
  margin: 2rem 0 0 2rem;
  @media screen and (max-width: 768px) {
    width: 85%;
   
  }
`;


const Tabelle = () => {

  return (
        <ContentContainer>
          <ContentTabelle/>
        </ContentContainer>
  );
}

export default Tabelle;
