import React from 'react';
import styled from 'styled-components';
import IconButton from '@mui/material/IconButton';
import DataSaverOnOutlinedIcon from '@mui/icons-material/DataSaverOnOutlined';


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
  margin-right: 30px;
  margin-bottom: 30px;
  @media (max-width: 768px) { 
    margin-left: 30px;
    
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
    text-align: center;
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
`;

const NewsCard = (props) => {
  return (
    <CardContainer>
      
      <TopContainer>
        <CircleWrapper>
          <Circle></Circle>
        </CircleWrapper>
        
        <AvatarContainer>
        
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
      <IconButton href={props.link} target="_blank" rel="noopener noreferrer" variant="outlined" style={{ paddingTop: '20px' }}><DataSaverOnOutlinedIcon></DataSaverOnOutlinedIcon></IconButton>
      </SpaceHorizontalContainer>
    </DetailsContainer>
      </BottomContainer>
    </CardContainer>
  )
}

export default NewsCard