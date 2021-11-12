import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import theme, { GlobalStyle } from '../../Theme';
import ContentTeam from '../ContentTeam';

const ContentContainer = styled.div`
  width: 50%;
  margin: 2rem 0 0 4rem;
`;

const Team = () => {
  return (
    <div className="Team">
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <ContentContainer>
          <ContentTeam />
        </ContentContainer>
      </ThemeProvider>
    </div>
  );
};

export default Team;
