import React from 'react';
import styled from "styled-components";
import Avatar from '@mui/material/Avatar';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import IconButton from '@mui/material/IconButton';
import { orange } from '@mui/material/colors';

const CardContainer = styled.div`
  min-width: 255px;
  min-height: 400px;
  max-width: 255px;
  max-height: 400px;
  display: flex;
  flex-direction: column;
  border-radius: 25px;
  box-shadow: 0 2px 7px 1px rgba(31, 31, 31, 0.2);
  background-color: #1d1f21;
  color: #fff;
  position: relative;
  margin-right: 20px;
  margin-bottom: 30px;
  @media (max-width: 300px) { 
    margin-left: 20px; 
   }
  
  
`;

const CircleWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  min-width: 100%;
  min-height: 100%;
  overflow: hidden;
  border-top-right-radius: 25px;
`;

const Circle = styled.div`
  position: absolute;
  
  top: -4.2em;
  right: -10em;
  z-index: 0;
  background-color: white;
  width: 280px;
  height: 280px;
  border-radius: 50%;
`;

const TopContainer = styled.div`
  
  display: flex;
  flex-direction: column;
  flex: 1.2;
  position: relative;
  align-items: center;
  justify-content: flex-end;
  padding: -1em 10px;
`;

const BottomContainer = styled.div`
  display: flex;
  flex: 0.8;
  padding: 0 2em;
`;

const ProfilText = styled.h2`
  color: #fff;
  margin: 0;
  z-index: 0;
  font-size: 26px;
  font-weight: 700;

`;

const LogoWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Logo = styled.div`
  width: auto;
  height: 35px;
  z-index: 0;
  user-select: none;

  img {
      width: auto;
      height: 100%;
      user-select: none;
  }
`;

const DetailsContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: 2.5em 6px 0 6px;
    line-height: 1.4;
    `;

const MediumText = styled.span`
    font-size: 15px;
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

  const SmallText1 = styled.span`
  font-size: 11px;
  color: #fff;
  font-weight: 700;
  text-transform: uppercase;
  margin-right: -8px;
`;


const SpaceHorizontalContainer = styled.div`
    display:flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    margin-bottom: -8px;
  `;

  const AvatarContainer = styled.div`
  display:flex;
  width: 100%;
  margin-bottom: 170px;
  margin-left: 20px;
`;

const CardTest = (props) => {
  return (
    <CardContainer>
      <TopContainer>
        <CircleWrapper>
          <Circle></Circle>
        </CircleWrapper>
        <AvatarContainer>
        <Avatar sx={{width: 25, height: 25}} alt="test" style={{ paddingBottom: '5px' }} src="https://tmssl.akamaized.net/images/wappen/head/7785.png?lm=1457014527"/>
        </AvatarContainer>
        <LogoWrapper>
          <Logo>
          <Avatar sx={{width: 90, height: 90}}>{props.avatar}</Avatar>
          </Logo>
        </LogoWrapper>
        <ProfilText>{props.name}</ProfilText>
      </TopContainer>


      <BottomContainer>
      <DetailsContainer>
      <SmallText>{props.saison}</SmallText>
      <SpaceHorizontalContainer>
        <MediumText>{props.verein}</MediumText>
        <MediumText>{props.position}</MediumText>
      </SpaceHorizontalContainer>
      <br />

      <SpaceHorizontalContainer>
        <SmallText>im Verein seit:</SmallText>
        <SmallText>{props.jahr}</SmallText>
      </SpaceHorizontalContainer>

      <br />
      <SpaceHorizontalContainer>
        <SmallText>{props.status}</SmallText>
        <SmallText1>
        <IconButton href={props.link} target="_blank" rel="noopener noreferrer">
        <AccountCircleRoundedIcon sx={{ color: orange[500], right: 20 }}/>
        </IconButton>
        </SmallText1>
      </SpaceHorizontalContainer>
    </DetailsContainer>
      </BottomContainer>
    </CardContainer>



  );
}

export default CardTest;