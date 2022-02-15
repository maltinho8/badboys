import React from 'react';
import styled from 'styled-components';
import Button from '@mui/material/Button';
import {Link} from "react-router-dom";

const Container = styled.div`
  width: 70%;
  
  
`;

const Container1 = styled.div`
  width: 100vwimportant!;
  margin: auto;
  align-text: center;
  
`;

const Container2 = styled.div`
  width: 100vwimportant!;
  margin: auto;
  
`;

const Headline = styled.h3`
  font-size: 5rem;
  line-height: 1;
  margin-bottom: 3rem;
  color: white;
  
  
`;



const Text = styled.div`
  font-size: 1.2rem;
  color: white;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;



const Header = () => {
  return (

   
   
       <Container>
         <Container1>
      <Headline>
        Bad Boys
      </Headline>
     
     
      <Text>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
      </Text>
      </Container1>
      <br />
      <Container2>
      <ButtonContainer>
      <Link to="/Team" style={{ textDecoration: 'none' }}>
      <Button variant="outlined" href="#outlined-buttons" style={{ color: 'orange' }}>
              Mannschaft
      </Button></Link>&nbsp;&nbsp;
      <Link to="/Tabelle" style={{ textDecoration: 'none' }}>
      <Button variant="outlined" href="#outlined-buttons" style={{ color: 'orange' }}>
              Tabelle
      </Button>
      </Link>
      
      </ButtonContainer>
      </Container2>
      
      </Container>
      
    

      

  );
};

export default Header;
