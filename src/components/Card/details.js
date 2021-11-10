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
    font-size: 18px;
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

const FuPaButton = styled.button`
  padding: 5px 12px;
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


const Details = () => {
  return (
    <DetailsContainer>
      <SmallText>Saison 2021/2022</SmallText>
      <SpaceHorizontalContainer>
        <MediumText>Frohnauer SC II.</MediumText>
        <MediumText>ZOM</MediumText>
      </SpaceHorizontalContainer>
      <br />

      <SpaceHorizontalContainer>
        <SmallText>im Verein seit:</SmallText>
        <SmallText>2018</SmallText>
      </SpaceHorizontalContainer>

      <br />
      <SpaceHorizontalContainer>
        <SmallText>Status: Legende</SmallText>
        <FuPaButton><a href="https://www.fupa.net/player/paul-conradt-845302" style={{ target: '_blank', textDecoration: 'none', color: '#fff' }} >Profil</a></FuPaButton>



      </SpaceHorizontalContainer>
    </DetailsContainer>

  );
}

export default Details;