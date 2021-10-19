import React from 'react';
import styled from 'styled-components';

function Clickme () {
  alert ("Hallo Hallo Hallo");
}

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

const Button = styled.button`
  background-color: #E64A19;
  `;




const ContentLandingPage = () => {
  return (
    <Container>
      <Headline>
        Manage <br /> your team
      </Headline>
      <Text>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
      </Text>
      <Button onClick={Clickme}>Get Started now!</Button>
      <Button onClick={Clickme}>Get Started now!</Button>
    </Container>
  );
};

export default ContentLandingPage;
