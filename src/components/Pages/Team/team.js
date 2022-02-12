import React from 'react';
import styled  from 'styled-components';
import ContentTeam from '../../PagesContent/ContentTeam/index';

const TeamContainer = styled.div`
  width: 80%;
  margin: 0 auto;
`;

const TextContainer = styled.div`
  width: 85%;
  margin-left: 2.75rem;
  margin-bottom: 2rem;
 
`;

const Headline = styled.h2`
  font-size: 4rem;
  line-height: 1;
  margin-bottom: 2rem;
  color: white;
`;

const Text = styled.div`
  font-size: 1.2rem;
  color: white;
`;

const Container = styled.div`
  width: 100%;
`;

const Team = () => {
  return (
    <Container>
    <TextContainer>
    <Headline>
    Mannschaft Frohnauer SC II.
  </Headline>
  <Text>
    Kader der aktuellen BadBoys für die Saison 2021/2022
  </Text>
  </TextContainer>
 
        <TeamContainer>
          <ContentTeam/>
        </TeamContainer>
        </Container>
  );
}

export default Team;
