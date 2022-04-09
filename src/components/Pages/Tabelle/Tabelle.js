import React, {useState} from 'react';
import styled from 'styled-components';
import ContentTabelle from '../../PagesContent/ContentTabelle/index';

const ContentContainer = styled.div`
  width: 80%;
  margin: 2rem 0 0 2rem;
  @media screen and (max-width: 768px) {
    width: 85%;
   
  }
`;


const Tabelle = () => {
  const [counter, setCounter] = useState(10);

const Up = () => {
  setCounter(counter + 1);
};

const Down = () => {
  setCounter(counter - 1);
};
  return (
        <ContentContainer>
          <ContentTabelle/>
          <button onClick={Up}>Up</button>
          <span>{counter}</span>
          <button onClick={Down}>Down</button>
        </ContentContainer>
  );
}

export default Tabelle;
