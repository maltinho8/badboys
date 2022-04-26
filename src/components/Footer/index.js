import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Box = styled.div`
  background-color: black;
  opacity: 0.6;
  position: sticky;
  top: 0;
  width: 100%;
  border-top: 1px solid white;
`;

const Container = styled.div`
  width: 100%;
  padding: 1rem 1rem 1rem 1rem;
  /* background: red; */
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

const Row = styled.div`
  display: flex;
  justify-content: center;

  grid-gap: 270px;

  @media (max-width: 768px) {
    grid-gap: 20px;
    justify-content: space-evenly;
    width: 100%;
  }
`;

const FooterLink = styled.a`
  color: #fff;
  margin-bottom: 10px;
  font-size: 14px;
  text-decoration: none;

  &:hover {
    color: white;
    transition: 200ms ease-in;
  }
`;

const FooterLinkReact = styled(Link)`
  color: #fff;
  margin-bottom: 10px;
  font-size: 14px;
  text-decoration: none;

  &:hover {
    color: white;
    font-weight: bold;
    transition: 200ms ease-in;
  }
`;

const Heading = styled.p`
  font-size: 18px;
  color: #fff;
  margin-bottom: 20px;
  font-weight: bold;
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const Footer = () => {
  return (
    <Box>
      <Container>
        <Row>
          <Column>
            <Heading>Über uns</Heading>
            <FooterLink href="https://www.fussball.de/spieltagsuebersicht/herren-kreisliga-a-st1-kreis-berlin-kreisliga-a-herren-saison2122-berlin/-/staffel/02EK4EN2PS000006VS5489B3VVCDCH5N-G#!/">
              Mannschaft
            </FooterLink>
            <FooterLink href="http://www.frohnauersc.de/">Verein</FooterLink>
          </Column>
          <Column>
            <Heading>Kontakt</Heading>
            <FooterLink href="#">Kontakt</FooterLink>
            <FooterLinkReact to="/Impressum">Impressum</FooterLinkReact>
          </Column>
          <Column>
            <Heading>Social Media</Heading>

            <FooterLink href="https://instagram.com/badboysfsc?utm_medium=copy_link">
              <i className="fab fa-instagram"></i>
            </FooterLink>
            <FooterLink href="https://www.facebook.com/Frohnauersc/">
              <i className="fab fa-facebook-f"></i>
            </FooterLink>
          </Column>
        </Row>
      </Container>
    </Box>
  );
};

export default Footer;
