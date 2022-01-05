import React from 'react';
import styled from 'styled-components';

import ContentDefense from './ContentDefense';


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
        Frohnauer SC II
      </Headline>
      <Text>
        Blablablabla.
      </Text>

      < br />
      < br />
      

      <SpaceHorizontalContainer>
       
      </SpaceHorizontalContainer>
      < br />
      < br />
      
    </Container>
    
  );
};

export default ContentTeam;
