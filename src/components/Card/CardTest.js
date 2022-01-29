import React from 'react';
import styled from "styled-components";
import Soccer from '../../assets/img/fsc.png';
import Background from '../../assets/img/soccer-ball.png';
import Avatar from '@mui/material/Avatar';

const CardContainer = styled.div`
  width: 285px;
  height: 420px;
  display: flex;
  flex-direction: column;
  border-radius: 25px;
  box-shadow: 0 2px 7px 1px rgba(31, 31, 31, 0.2);
  background-color: #1d1f21;
  color: #fff;
  position: relative;
  cursor: grab;
  
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
  z-index: 5;
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
  padding: 1em 10px;
`;

const BottomContainer = styled.div`
  display: flex;
  flex: 0.8;
  padding: 0 2em;
`;

const ProfilText = styled.h2`
  color: #fff;
  margin: 0;
  z-index: 8;
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
  height: 10px;
  z-index: 99;
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


const SpaceHorizontalContainer = styled.div`
    display:flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    
  `;
  const Button = styled.button`
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
const CardTest = (props) => {
  return (
    <CardContainer>
      <TopContainer>
        <CircleWrapper>
          <Circle></Circle>
        </CircleWrapper>
        <LogoWrapper>
          <Logo>
          <Avatar sx={{width: 65, height: 65}}>{props.avatar}</Avatar>
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
        <Avatar alt="test" src="https://scontent-ber1-1.xx.fbcdn.net/v/t1.6435-9/37271050_1922897397766864_4363209722128498688_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeECo2XWY1scC4f5r4_rkF8s0QWJBceNokXRBYkFx42iRaq-OqUxzgqEmPmeWx_r9CbATClG8v-gNk6LV0IKTPlg&_nc_ohc=RxBYIfcRsisAX87cWMk&_nc_ht=scontent-ber1-1.xx&oh=00_AT9Yl4XYodStCYX-7BysOuUI12iJVocP7-hllAoz73X_EQ&oe=621BE260"/>
      </SpaceHorizontalContainer>
    </DetailsContainer>
      </BottomContainer>
    </CardContainer>



  );
}

export default CardTest;