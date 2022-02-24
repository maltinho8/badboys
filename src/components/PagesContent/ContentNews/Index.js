import React, {useEffect} from 'react';
import styled from 'styled-components';
import MusicCardDemo from '../../Blog/Index';
import Aos from 'aos';
import 'aos/dist/aos.css';
import './Index.css';
import Bild from '../../../assets/img/reeperbahn.jpg';

const Container = styled.div`
  padding: 1rem;
  color: ${({theme}) => theme.palette.text.light};
  display: inline-block;
`;

const Headline = styled.h2`
  font-size: 5rem;
  line-height: 1;
  margin-bottom: 3rem;
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

const ContentNews = () => {
  useEffect(() => {
    Aos.init({duration: 2000});
  }, []);
  return (
    <Container>
      <Headline>
        News
      </Headline>
      <Text>
     Blablahfggdfg gf erg zer uzfudfguer ezruerg zeewur werzeuw wuzeg wuegr.
        
      </Text>  
      
      <br />
      <br />
      <BlogWrapper>
      <BlogContainer>
      < MusicCardDemo />
      </BlogContainer>
      
      </BlogWrapper>

      <div className="grids">
        <div className="boxes">1</div>
        <div className="boxes">2</div>
        <div data-aos="fade-right" className="boxes"><img src={Bild} alt="test" width="500"></img></div>
        <div data-aos="flip-right" className="boxes">4</div>
        <div className="boxes">5</div>
      </div>
      
      </Container>
    
      
     

    
  );
};

export default ContentNews;
