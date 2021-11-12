import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 1rem;
  color: ${({ theme }) => theme.palette.text.light};
`;

const Headline = styled.h2`
  font-size: 5rem;
  line-height: 1;
  margin-bottom: 3rem;
`;

const Text = styled.div`
  font-size: 1.2rem;
`;

const ContentSpielplan = () => {
  return (
    <Container>
      <Headline>Spielplan</Headline>
      <Text>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
        tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
      </Text>
    </Container>
  );
};

export default ContentSpielplan;
