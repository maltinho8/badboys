import React from 'react';
import styled from 'styled-components';
import Card from '../../Card/index';


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
    
    
  `; 


const ContentTeam = () => {
  return (
    <Container>
      <Headline>
        Team
      </Headline>
      <Text>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
      </Text>

      < br />
      < br />

      <SpaceHorizontalContainer>
        <Card />
        <Card />
       
        <Card />
        
        
      
        
        
      </SpaceHorizontalContainer>
      < br />
      < br />
      <SpaceHorizontalContainer>
        <Card />
        <Card />
        
        
      </SpaceHorizontalContainer>

      
  
    </Container>
    
  );
};

export default ContentTeam;
