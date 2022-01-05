import React from 'react';
import styled from 'styled-components';
import CardTest from '../../Card/CardTest';

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

const ContentDefense = () => {

  

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
      <SpaceHorizontalContainer>
        <div><CardTest/></div>
      
      </SpaceHorizontalContainer>
      
    </Container>
    
  );
};

export default ContentDefense;
