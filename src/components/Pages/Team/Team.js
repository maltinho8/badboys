import React from 'react';
import styled  from 'styled-components';
import ContentTeam from '../../PagesContent/ContentTeam/index';

const ContentContainer = styled.div`
  width: 100%;
  margin: 2rem 0 0 2rem;
  @media screen and (max-width: 768px) {
    margin: 0 0 0 0;
  }
 
   
  }
`;
const Team = () => {
  return (
    <ContentContainer>
          <ContentTeam/>   
    </ContentContainer>
  );
}

export default Team;
