import React from 'react';
import styled from 'styled-components';
import WidgetSpiele from './WidgetSpiele/Widget.js';

const Container = styled.div`
  padding: 1rem;
  color: ${({theme}) => theme.palette.text.light};
`;

const Headline = styled.h2`

line-height: 1;
margin-bottom: 2rem;
color: white;
  
`;

const Text = styled.div`
  font-size: 1.2rem;
`;


const ContentSpiele = () => {
  return (
    <Container>
      <Headline>
       Upcoming Fixtures
      </Headline>
      <Text>
      Die nächsten Spiele für die BadBoys in der Saison 2021/2022 der Kreisliga A Staffel 1.
      </Text>
      <br />
      <br />
      <WidgetSpiele />
      </Container>
  );
};

export default ContentSpiele;
