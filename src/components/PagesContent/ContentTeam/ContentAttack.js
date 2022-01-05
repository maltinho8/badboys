import React from 'react';
import styled from 'styled-components';
import Card from '../../Card/Index';

import GoalCard from '../../Card/Goal/Index';


const Container = styled.div`
  padding: 1rem;
  width: 100%;
  color: ${({theme}) => theme.palette.text.light};
`;

const Headline = styled.h2`
  font-size: 5rem;
  line-height: 1;
  margin-bottom: 3rem;
`;

const Text = styled.div`
  font-size: 1.2rem;
`;

const SpaceHorizontalContainer = styled.div`
    display:flex;
    width: 100%;
    justify-content: space-between; 
    @media (max-width: 900px) {
      flex-wrap: wrap;
      align-items: center;
      display:flex;
      margin-bottom: 50px;
    }
    
  `; 

  const ButtonContainer = styled.div`
    display:flex;
    width: 60%;
    justify-content: space-between;
    margin-bottom: 50px;
    @media (max-width: 900px) {
      flex-wrap: wrap;
      align-items: center;
      display:flex;
      margin-bottom: 50px;
    }
    
  `; 

const ContentTeam = () => {
  return (
    <Container>
      <Headline>
        Team
      </Headline>
      <Text>
        Auf dieser Seite werden die Spieler der zweiten Mannschaft des Frohnauer SC vorgestellt.
      </Text>
      < br />
      < br />
      <ButtonContainer>
     
      
      </ButtonContainer>
      < br />
      < br />
      <SpaceHorizontalContainer>
        <div><Card/></div>
        <div><GoalCard/></div>
        <div><Card/></div>
      </SpaceHorizontalContainer>
      < br />
      < br />
      <SpaceHorizontalContainer>
        <div><Card/></div>
        <div><Card/></div>
        <div><Card/></div>
      </SpaceHorizontalContainer>
    </Container>
    
  );
};

export default ContentTeam;
