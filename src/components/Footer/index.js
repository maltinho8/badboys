import React from "react";
import styled from "styled-components";

const Box = styled.div`
  background-color: black;
  position: sticky;
  top: 0;
  width: 100%;
  border-top: 1px solid white;
`;

const Container = styled.div`
  width: 100%;
  padding: 1rem 1rem 1rem 1rem;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Row1 = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
  grid-gap: 20px;
  justify-content: center;
  width: 100%;
`;

const Row2 = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  grid-gap: 50px;
`;

const HeadingOne = styled.h1`
  font-size: 18px;
  color: #fff;
  margin-bottom: 20px;
  font-weight: bold;
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const HeadingTwo = styled.p`
  font-size: 12px;
  color: #fff;
  margin-bottom: 20px;
  font-weight: bold;
  @media (max-width: 768px) {
    font-size: 11px;
  }
`;

const RowContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  @media screen and (max-width: 768px) {
  }
`;

const Footer = () => {
  return (
    <Box>
      <Container>
        <RowContainer>
          <Row1>
            <HeadingOne>Frohnauer SC II</HeadingOne>
          </Row1>
          <Row2>
            <Column>
              <HeadingTwo>Social Media</HeadingTwo>
            </Column>
            <Column>
              <HeadingTwo>Verein</HeadingTwo>
            </Column>
            <Column>
              <HeadingTwo>Impressum</HeadingTwo>
            </Column>
            <Column>
              <HeadingTwo>© 2022</HeadingTwo>
            </Column>
          </Row2>
        </RowContainer>
      </Container>
    </Box>
  );
};

export default Footer;
