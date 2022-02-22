import React from 'react';
import styled from 'styled-components';
import Field from '../../FootballField/Index';
import MusicCardDemo from '../../Blog/Index';

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
  return (
    <Container>
      <Headline>
        Hall of Fame
      </Headline>
      <Text>
     
        
      </Text>  
      
      <br />
      <br />
      <BlogWrapper>
      <BlogContainer>
      < MusicCardDemo />
      </BlogContainer>
      <BlogContainer>
      < MusicCardDemo />
      </BlogContainer>
      </BlogWrapper>
      
      </Container>
    
      
     

    
  );
};

export default ContentNews;
