import React from 'react';
import Ball from '../../assets/img/soccer-ball.png'
import styled from 'styled-components';

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
  width: 85%;
  height: 85%;
`;

const TextBubbleRed = styled.div`
  position: absolute;
  top: 1rem;
  left: 1rem;
  width: 8rem;
  height: 8rem;
  padding: 0.5rem;
  border-radius: 50%;
  background-color: rgba(238, 108, 77, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: ${({theme}) => theme.palette.text.light};
  font-weight: 700;
  font-size: 1.2rem;
`;

const TextBubbleWhite = styled.div`
  position: absolute;
  bottom: -5rem;
  right: 5rem;
  width: 10rem;
  height: 10rem;
  padding: 1rem;
  border-radius: 50%;
  background-color: rgba(61, 90, 128, 0.8);
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
      <SoccerBall src={Ball} />
      <TextBubbleRed>
        Easy to manage
      </TextBubbleRed>
      <TextBubbleWhite>
        A platform for all kind of teams
      </TextBubbleWhite>
    </Container>
  );
};

export default HeadlineDrawing;
