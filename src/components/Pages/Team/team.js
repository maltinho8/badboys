import React from 'react';
import styled  from 'styled-components';
import ContentTeam from '../../PagesContent/ContentTeam/index';

const ContentContainer = styled.div`
  width: 85%;
  margin: 2rem 0 0 4rem;
`;

const Team = () => {
  return (
        <ContentContainer>
          <ContentTeam/>
        </ContentContainer>
  );
}

export default Team;
