import React from 'react';
import styled from 'styled-components';
import ContentSpiele from '../../PagesContent/ContentSpiele/index.js';

const ContentContainer = styled.div`
width: 100vwimportant!;
margin: 0 auto;
padding: 2rem;
`;


const Spiele = () => {

  return (
        <ContentContainer>
          <ContentSpiele/>
        </ContentContainer>
  );
}

export default Spiele;
