import React from 'react';
import styled from "styled-components";
import LogoTCC from '../../../assets/img/TCC.png';
import Details from './details';

const CardContainer = styled.div`
  width: 285px;
  height: 500px;
  display: flex;
  flex-direction: column;
  border-radius: 25px;
  box-shadow: 0 2px 7px 1px rgba(31, 31, 31, 0.2);
  background-color: #71c77e;
  color: #fff;
  position: relative;
  cursor: grab;
  opacity: 0.6;
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
  width: 320px;
  height: 320px;
  top: -4.2em;
  right: -10em;
  z-index: 5;
  background-color: #f26380;
  border-radius: 50%;
`;

const TopContainer = styled.div`
  
  display: flex;
  flex-direction: column;
  flex: 1.2;
  position: relative;
  align-items: center;
  justify-content: flex-end;
  
`;

const BottomContainer = styled.div`
  display: flex;
  flex: 0.8;
  padding: 0 0.5em;
`;

const ProfilText = styled.h2`
  color: #fff;
  margin: 0;
  z-index: 10;
  font-size: 40px;
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
  height: 100px;
  z-index: 99;
  user-select: none;

  img {
      width: auto;
      height: 100%;
      user-select: none;
  }
`;

const Card = (props) => {
  return (
    <CardContainer>
      <TopContainer>
        <CircleWrapper>
          <Circle />
        </CircleWrapper>
        <LogoWrapper>
          <Logo>
            <img src={LogoTCC} alt = "Soccer" />
          </Logo>
        </LogoWrapper>
        <ProfilText>Yasha Tarani</ProfilText>
      </TopContainer>
      <BottomContainer><Details /></BottomContainer>
    </CardContainer>



  );
}

export default Card;