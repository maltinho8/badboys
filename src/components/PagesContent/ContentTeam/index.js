import './index.css';
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
        Team
      </Headline>
      <Text>
        Auf dieser Seite werden die Spieler der zweiten Mannschaft des Frohnauer SC vorgestellt.
      </Text>

      < br />
      < br />
      <ButtonContainer>
      <a href="https://www.fupa.net/player/paul-conradt-845302" target="_blank">
          <Button>Tor</Button>
        </a>
        <a href="https://www.fupa.net/player/paul-conradt-845302" target="_blank">
          <Button>Abwehr</Button>
        </a>
        <a href="https://www.fupa.net/player/paul-conradt-845302" target="_blank">
          <Button>Mittelfeld</Button>
        </a>
        <a href="https://www.fupa.net/player/paul-conradt-845302" target="_blank">
          <Button>Sturm</Button>
        </a>
      
      </ButtonContainer>
      < br />
      < br />

      <SpaceHorizontalContainer>
        <div className = "one"><Card/></div>
        <div className = "two"><Card/></div>
        <div className = "three"><Card/></div>
      </SpaceHorizontalContainer>
      < br />
      < br />
      <SpaceHorizontalContainer>
        <div className = "one"><Card/></div>
        <div className = "two"><Card/></div>
        <div className = "three"><Card/></div>
      </SpaceHorizontalContainer>
      

      
  
    </Container>
    
  );
};

export default ContentTeam;
