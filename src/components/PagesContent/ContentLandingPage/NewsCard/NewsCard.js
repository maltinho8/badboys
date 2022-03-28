import React from 'react';
import styled from 'styled-components';
<<<<<<< HEAD
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

const ContentContainer = styled.div`
margin-left: 1rem;
margin-right: 1rem;

@media screen and (max-width: 768px) {
  margin-left: 3rem;
  margin-right: 3rem;
  display: block;
 
}
=======
import Avatar from '@mui/material/Avatar';
import InfoIcon from '@mui/icons-material/Info';
import IconButton from '@mui/material/IconButton';
import { orange } from '@mui/material/colors';


const CardContainer = styled.div`
  width: 325px;
  height: 300px;
  display: flex;
  flex-direction: column;
  border-radius: 25px;
  box-shadow: 0 2px 7px 1px rgba(31, 31, 31, 0.2);
  background-color: white;
  color: #fff;
  position: relative;
  margin-right: 90px;
  margin-bottom: 30px;
  @media (max-width: 768px) { 
    margin-left: 90px;
    
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
  
  top: -6em;
  right: -10em;
  z-index: 0;
  background-color: black;
  width: 230px;
  height: 230px;
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
  
`;

const ProfilText = styled.h2`
  color: black;
  margin: 0;
  z-index: 0;
  font-size: 20px;
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
  margin-bottom: 50px;

  img {
      width: 75px;
      height: 75px;
      user-select: none;
  }
`;

const DetailsContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: 0.3em 6px 0 6px;
    line-height: 1.6;
    `;

const MediumText = styled.span`
    font-size: 18px;
    color: black;
    font-weight: 900;
    text-transform: uppercase;
  `;

const SmallText = styled.span`
    font-size: 11px;
    color: black;
    font-weight: 700;
    
  `;



const SpaceHorizontalContainer = styled.div`
    display:flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    margin-bottom: -8px;
  `;

  const AvatarContainer = styled.div`
  display:flex;
  width: 100%;
  margin-top: 10px;
  margin-bottom: 160px;
  margin-right: -580px;
>>>>>>> 9c7fc416f0c8bcacb2ec37b878915ab82f398c93
`;

const NewsCard = (props) => {
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
          {props.image}
          </Logo>
          
        </LogoWrapper>
        <MediumText>{props.title}</MediumText>
        
      </TopContainer>
      


      <BottomContainer>
      
      <DetailsContainer>
      <SmallText>{props.description}</SmallText>
      <SpaceHorizontalContainer>
      <IconButton href={props.link} target="_blank" rel="noopener noreferrer">
        <InfoIcon sx={{ color: orange[500], right: 20 }}/>
        </IconButton>
      </SpaceHorizontalContainer>
    </DetailsContainer>
      </BottomContainer>
    </CardContainer>
  )
}

export default NewsCard