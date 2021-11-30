import './index.css';
import React from 'react';
import styled from 'styled-components';
import Card from '../../Card/Tarani/index';
import CardObst from '../../Card/Obst/index';



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

const Button = styled.button`
  padding: 5px 35px;
  background-color: #fbbe01;
  color: #000;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 700;
  border: 2px solid transparent;
  outline: none;
  cursor: pointer;
  transition: all 290ms ease-in-out;
  border-radius: 8px;
  &:hover {
    background-color: transparent;
    color: #fff;
    border: 3px solid #fbbe01;
  }
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
        Speaker*innen
      </Headline>
      <Text>
        Auf dieser Seite werden die Speaker*innen des Climate Transformation Summit 2022 vorgestellt.
      </Text>

      < br />
      < br />
      

      <SpaceHorizontalContainer>
        <div className = "one"><Card/></div>
        <div className = "two"><CardObst/></div>
        <div className = "three"><Card/></div>
      </SpaceHorizontalContainer>
      < br />
      < br />
      
    </Container>
    
  );
};

export default ContentTeam;
