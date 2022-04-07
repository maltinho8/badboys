import React from "react";
import './index.css';
import styled from 'styled-components';

const Box = styled.div`
  
  background-color: black;
  opacity: 0.6;
  position: sticky;
  top: 0;
  width: 100%;
  border-top: 1px solid white;
  @media (max-width: 768px) {
    
  }
`;
   
const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 1000px;
    margin: 0 auto;
    /* background: red; */
`
   
const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 60px;
`;
   
const Row = styled.div`
  display: flex;
  justify-content: center;
  grid-template-columns: repeat(auto-fill, 
                         minmax(185px, 1fr));
  grid-gap: 270px;
   
  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, 
                           minmax(200px, 1fr));
                           grid-gap: 10px;
  }
`;
   
const FooterLink = styled.a`
  color: #fff;
  margin-bottom: 20px;
  font-size: 14px;
  text-decoration: none;
   
  &:hover {
      color: green;
      transition: 200ms ease-in;
  }
`;

const HeadingTop = styled.h2`
  font-size: 30px;
  color: #fff;
  
  margin-bottom: 40px;
  font-weight: bold;
  text-align: center;
`;
   
const Heading = styled.p`
  font-size: 18px;
  color: #fff;
  margin-bottom: 40px;
  font-weight: bold;
`;


const Footer = () => {
  return (
    <Box>
      <HeadingTop>
        BadBoys
      </HeadingTop>
      <Container>
        <Row>
          <Column>
            <Heading>Über uns</Heading>
            <FooterLink href="#">Mannschaft</FooterLink>
            <FooterLink href="#">Verein</FooterLink>
            
          </Column>
          <Column>
            <Heading>Contact Us</Heading>
            <FooterLink href="#">Kontakt</FooterLink>
            <FooterLink href="#">Impressum</FooterLink>
            
          </Column>
          <Column>
            <Heading>Social Media</Heading>
            
            <FooterLink href="#">
              <i className="fab fa-instagram">
                <span style={{ marginLeft: "10px" }}>
                  Instagram
                </span>
              </i>
            </FooterLink>
            
          </Column>
        </Row>
      </Container>
    </Box>

 
  
  );
};
 

export default Footer;