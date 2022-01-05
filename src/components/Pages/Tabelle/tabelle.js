import React from 'react';
import styled from 'styled-components';
import ContentTabelle from '../../PagesContent/ContentTabelle/Index';

const ContentContainer = styled.div`
  width: 50%;
  margin: 2rem 0 0 4rem;
`;

const Tabelle = () => {
  return (
        <ContentContainer>
          <ContentTabelle/>
        </ContentContainer>
  );
}

export default Tabelle;
