import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

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

const FooterLink = styled.a`
  color: #fff;
  margin-bottom: 20px;
  font-size: 16px;
  `;

  const FooterLinkReact = styled(Link)`
    margin-bottom: 20px;
  font-size: 16px;
  text-decoration: none;
  color: #fff;
    `;

    const Row1 = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
    grid-gap: 20px;
    justify-content: center;
    width: 100%;
    margin-left: 0rem;
  
`;

const Row2 = styled.div`
  display: flex;
    grid-gap: 50px;
    justify-content: center;
    width: 100%;
`;

const HeadingOne = styled.h1`
  font-size: 24px;
  color: #fff;
  margin-bottom: 20px;
  font-weight: bold;
  text-align: center;
  @media (max-width: 768px) {
    font-size: 16px;
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
            <HeadingOne>BADBOYS</HeadingOne>
          </Row1>
          <Row2>
            <Column>
              <FooterLinkReact to="/Team">Team</FooterLinkReact>
            </Column>
            <Column>
              <FooterLinkReact to="/Impressum">Impressum</FooterLinkReact>
            </Column>
            <Column>
              <FooterLinkReact to="/#">Kontakt</FooterLinkReact>
            </Column>
            <Column>
              <FooterLink href="https://instagram.com/badboysfsc?utm_medium=copy_link" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </FooterLink>
            </Column>
          </Row2>
        </RowContainer>

      </Container>
    </Box>
  );
};

export default Footer;