import React from 'react';
import styled from 'styled-components';
import WidgetTabelle from './WidgetTabelle/Widget';

const Container = styled.div`
  padding: 3rem;
  color: ${({theme}) => theme.palette.text.light};
`;

const Headline = styled.h2`

line-height: 1;
margin-bottom: 2rem;
text-align: center;
`;

const Text = styled.div`
  font-size: 1.2rem;
  text-align: center;
  color: black;
`;


const ContentTabelle = () => {
  return (
    <Container>
      <Headline>
        Tabelle
      </Headline>
      <Text>
      Die Tabelle der Saison 2022/2023 der Kreisliga A Staffel 4.
      </Text>
      <br />
      <br />
      <WidgetTabelle />
      </Container>
  );
};

export default ContentTabelle;
