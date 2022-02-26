import React from 'react';
import styled from 'styled-components';
import Button from '@mui/material/Button';
import {Link} from "react-router-dom";

const Container = styled.div`
width: 100%;
margin: 0 auto;

  
  
`;

const Container1 = styled.div`
  margin-left: 3rem;
  margin-right: 3rem;
 
  
`;

const Headline = styled.h3`
  font-size: 5rem;
  line-height: 1;
  margin-bottom: 3rem;
  color: white;
  margin-top: 25rem;
  
  
  
`;



const Text = styled.div`
  font-size: 1.2rem;
  color: white;
  width: 50%;
`;


const Header = () => {
  return (

   
   
       <Container>
         <Container1>
      
     
     
      <Text>
        Spätestens seit dem furiosen Reeperbahn-Auftritt 2019 erlangten die BadBoys überregionale Bekanntheit. Dem Durchmarsch von der Kreisliga C in die Kreisliga A soll nun auch der Schritt in den bezahlten Profifussball folgen. 
      </Text>
      
      <br />
      
      
      <Link to="/Team" style={{ textDecoration: 'none' }}>
      <Button variant="outlined" href="#outlined-buttons" style={{ color: 'orange' }}>
              Mannschaft
      </Button></Link>&nbsp;&nbsp;
      <Link to="/Tabelle" style={{ textDecoration: 'none' }}>
      <Button variant="outlined" href="#outlined-buttons" style={{ color: 'orange' }}>
              Tabelle1
      </Button>
      </Link>
      <Headline>
        Bad Boys
      </Headline>
      
      
      </Container1>
      
      </Container>
      
    

      

  );
};

export default Header;
