import React, {useEffect} from 'react';
import styled from 'styled-components';
import Aos from 'aos';
import 'aos/dist/aos.css';
import './index.css';

const Container = styled.div`
  padding: 1rem;
  color: ${({theme}) => theme.palette.text.light};
  display: inline-block;
`;

const Headline = styled.h2`
font-size: 4rem;
line-height: 1;
margin-bottom: 2rem;
color: white;
`;

const BlogWrapper = styled.div`
  
`;


const BlogContainer = styled.div`
  display:inline-block;
  margin-right: 40px;
`;

const Text = styled.div`
  font-size: 1.2rem;
`;

const ContentHallOfFame = () => {
  useEffect(() => {
    Aos.init({duration: 2000});
  }, []);
  return (
    <Container>
      <Headline>
        Hall of Fame
      </Headline>
      <Text>
     Blablahfggdfg gf erg zer uzfudfguer ezruerg zeewur werzeuw wuzeg wuegr.

      </Text>

      

      <div className="grids">
       
        <div data-aos="fade-right" className="boxes"><img src='https://images.unsplash.com/photo-1517137879134-48acfbe3be13?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2532&q=80' alt="test" width="500"></img></div>
        
      </div>

      </Container>





  );
};

export default ContentHallOfFame;
