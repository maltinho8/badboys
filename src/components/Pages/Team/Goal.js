import React from 'react';
import styled  from 'styled-components';
import ContentGoal from '../../PagesContent/ContentTeam/ContentGoal';

const ContentContainer = styled.div`
  width: 85%;
  margin: 2rem 0 0 4rem;
`;

const Goal = () => {
  return (
        <ContentContainer>
          <ContentGoal/>
        </ContentContainer>
  );
}

export default Goal;
