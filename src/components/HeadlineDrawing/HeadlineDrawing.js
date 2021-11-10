import React from 'react';
import styled from 'styled-components';
import FSC from '../../assets/img/Frohnauer_SC.gif';

const Container = styled.div`
  position: relative;
  height: ${({size}) => size ? size : 300}px;
  width: ${({size}) => size ? size : 300}px;
  border-radius: 50%;
  background: ${({theme}) => `linear-gradient(${theme.palette.primary.main}, ${theme.palette.secondary.main})`};
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 0px 13px 13px rgba(0,0,0,0.53);
`;

const SoccerBall = styled.img`
  width: 70%;
  height: 70%;
`;

const TextBubbleWhite = styled.div`
  position: absolute;
  top: 1rem;
  left: 1rem;
  width: 8rem;
  height: 8rem;
  padding: 0.5rem;
  border-radius: 50%;
  background-color: rgba(255, 255, 255);
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: ${({theme}) => theme.palette.text.light};
  font-weight: 700;
  font-size: 1.2rem;
`;

const TextBubbleBlack = styled.div`
  position: absolute;
  bottom: -5rem;
  right: 5rem;
  width: 10rem;
  height: 10rem;
  padding: 1rem;
  border-radius: 50%;
  background-color: rgba(0,0,0);
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: ${({theme}) => theme.palette.text.light};
  font-weight: 700;
  font-size: 1.2rem;
`;


const HeadlineDrawing = ({size}) => {
  return (
    <Container size={size}>
      <SoccerBall />
      <TextBubbleWhite>
      <img src = {FSC} alt = "FSC" style = {{width: '9rem' , height: '9rem'}} ></img>
      </TextBubbleWhite>
      <TextBubbleBlack>
      <img src = {FSC} alt = "FSC" style = {{width: '12rem' , height: '12rem', filter: 'invert(1)'}} ></img>
      </TextBubbleBlack>
    </Container>
  );
};

export default HeadlineDrawing;
