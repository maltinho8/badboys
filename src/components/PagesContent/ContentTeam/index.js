import React from 'react';
import styled from 'styled-components';
import CardTest from '../../Card/CardTest';

import Deets from '../../Card/Deets';


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

const ContentTeam = () => {
  const profiles = [
    {
      id: 'e1',
      name: 'Simon Globig',
      saison: '2021/2023',
      verein: 'Frohnauer SC II',
      position: 'GK',
      jahr: '2018',
      status: 'Status: Rookie',
    },
    { id: 'e2',
    name: 'Xaver Globig',
    saison: '2021/2022',
    verein: 'Frohnauer SC II',
    position: 'ZOM',
    jahr: 'lalala',
  },
    {
      id: 'e3',
      name: 'Justin Globig',
      saison: '2021/2022',
      verein: 'Frohnauer SC II',
      position: 'ZOM',
      jahr: '2018',
    },
  ];
  return (
    <Container>
      <Headline>
        Mannschaft Frohnauer SC II.
      </Headline>
      <Text>
        Blablablabla.
      </Text>
      <Deets info={profiles}/>

      < br />
      < br />
     
    </Container>
    
  );
};

export default ContentTeam;
