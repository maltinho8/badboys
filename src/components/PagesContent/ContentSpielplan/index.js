import React from 'react';
import styled from 'styled-components';
import WidgetSpielplan from './WidgetSpielplan/Widget';

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

const ContentSpielplan = () => {
  return (
    <Container>
      <Headline>
        Spielplan
      </Headline>
      <Text>
       Der Spielplan der Saison 2021/2022 der Kreisliga A Staffel 1.
      </Text>  
      <br />
      <br />
      <WidgetSpielplan />
      </Container>
  );
};

export default ContentSpielplan;
