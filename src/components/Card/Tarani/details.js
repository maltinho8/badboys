import React from 'react';
import styled from "styled-components";


const DetailsContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: 2.5em 6px 0 6px;
    line-height: 1.4;
    `;

const MediumText = styled.span`
    font-size: 14px;
    color: #fff;
    font-weight: 800;
    text-transform: uppercase;
  `;

const SmallText = styled.span`
    font-size: 11px;
    color: #fff;
    font-weight: 700;
    text-transform: uppercase;
  `;


const SpaceHorizontalContainer = styled.div`
    display:flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    
  `;
  const Button = styled.button`
  padding: 5px 12px;
  background-color: white;
  border: 3px solid black;
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
    border: 3px solid white;
  }
`;


const Details = () => {
  return (
    <DetailsContainer>
      <SmallText>Unternehmen</SmallText>
      <SpaceHorizontalContainer>
        <MediumText>THE CLIMATE CHOICE</MediumText>
        
      </SpaceHorizontalContainer>
      <br />

      <SpaceHorizontalContainer>
        <SmallText>Position:</SmallText>
        <SmallText>Head of Sustainability</SmallText>
      </SpaceHorizontalContainer>
      

      <br />
      <SmallText>Yasha ist äußerst engagiert wenn es um die Umwelt geht.. Blablablablalalalalalalala
      
      </SmallText>
      <br />
      <SpaceHorizontalContainer>
        
        <a href="https://www.fupa.net/player/paul-conradt-845302" target="_blank" rel="noreferrer">
          <Button>LinkedIn</Button>
        </a>
        
          
          
          
          


      </SpaceHorizontalContainer>
    </DetailsContainer>

  );
}

export default Details;