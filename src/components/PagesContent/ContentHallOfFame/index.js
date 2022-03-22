import React, {useEffect} from 'react';
import styled from 'styled-components';
import Aos from 'aos';
import 'aos/dist/aos.css';
import './index.css';
import Avatar from '@mui/material/Avatar';

const Container = styled.div`
  padding: 1rem;
  color: ${({theme}) => theme.palette.text.light};
  display: inline-block;
`;

const Headline = styled.h2`

line-height: 1;
margin-bottom: 2rem;
color: white;
`;

const InterviewContainer = styled.div`
  padding: 1rem;
  border: 1px solid white;
`;



const Text = styled.div`
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
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
      <InterviewContainer>
      <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
        <Text>Name: Tobias Haby</Text>
        <Text>Name: Tobias Haby</Text>
        <Text>Name: Tobias Haby</Text>
      </InterviewContainer>

      

      <div className="grids">
       
        <div data-aos="fade-right" className="boxes"><img src='https://images.unsplash.com/photo-1517137879134-48acfbe3be13?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2532&q=80' alt="test" width="500"></img></div>
        
      </div>

      </Container>





  );
};

export default ContentHallOfFame;
