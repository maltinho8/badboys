import React from 'react';
import styled from 'styled-components';
import ScriptTag from 'react-script-tag';

const Container = styled.div`
  padding: 1rem;
  color: ${({theme}) => theme.palette.text.light};
`;

const Headline = styled.h2`
  font-size: 5rem;
  line-height: 1;
  margin-bottom: 3rem;
`;

const Text = styled.div`
  font-size: 1.2rem;
`;

const Table = styled.div`
  padding: 1rem;
  color: ${({theme}) => theme.palette.text.light};
`;

const ContentTabelle = () => {
  return (
    <Container>
      <Headline>
        Programm
      </Headline>
      <Text>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
      </Text>
      <br />
      <br />
      <Text>
        Programm des CTS 2022
      </Text>
      

      
    </Container>
  );
};

export default ContentTabelle;
