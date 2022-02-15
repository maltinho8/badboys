import React from 'react';
import styled from 'styled-components';
import { HeadlineDrawing } from "../../HeadlineDrawing/Index";
import TimeLine from "../../Timeline/Timeline";
import Header from '../../PagesContent/ContentLandingPage/Header';
import Pics from '../../Pics/Pics';

const Container = styled.div`
  width: 100%;

  
`;

const HeadlineSmall = styled.h4`
  font-size: 2.5rem;
  line-height: 1;
  margin-bottom: 3rem;
  color: white;
`;

const HeadlineSmall1 = styled.h4`
  font-size: 2.5rem;
  line-height: 1;
  margin-bottom: 3rem;
  color: white;
  @media (max-width: 768px) { 
    text-align: center; 
    display:none;
  }

`;

const HeadlineSmall2 = styled.h4`
  font-size: 2.5rem;
  line-height: 1;
  margin-bottom: 3rem;
  color: white;
  @media (max-width: 768px) { 
    text-align: center; 
  }

`;

const Text = styled.div`
  font-size: 1.2rem;
  color: white;
`;

const Text1 = styled.div`
  font-size: 1.2rem;
  color: white;
  @media (max-width: 768px) { 
    display:none; 
  }
`;



const HeaderContainer = styled.div`
 
text-align: center;
`;

const ContentContainer = styled.div`
 width:50%;
 padding: 20px;
 justify-content: space-between;
 @media (max-width: 768px) { 
  margin: 0 auto; 
}
`;

const ContentContainer2 = styled.div`
 width:50%;
 
 @media (max-width: 768px) {  
  margin: 0 auto; 
}
`;

const ContentContainer3 = styled.div`
 width:80%;
 padding: 20px;
 @media (max-width: 768px) {  
  margin: 0 auto;
}
`;

  const HeadlineContainer = styled.div`
  position: absolute;
  top: 30rem;
  right:-5rem;
  border-radius: 50%;
  z-index: 10;
  
  @media screen and (max-width: 768px) {
    top: 32rem;
    margin-bottom: 30px;
   
  }
    
  `;

  const ImageContainer = styled.div`
  width: 100%;
`;




const ContentLandingPage = () => {
  return (

    
       <Container>
          <HeaderContainer>
         <Header/>
       </HeaderContainer>
       
      <ContentContainer>
      <HeadlineSmall1>
      Chemie in der Mannschaft
      </HeadlineSmall1>
      <Text1>
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
      </Text1>
      <br />
      <br />
      <br />
      <br />
      <br />
      
      <HeadlineContainer>
      <HeadlineDrawing/>
      </HeadlineContainer>
     
      </ContentContainer>

      <ContentContainer2>  
      <HeadlineSmall>
      Erfolge seit der Gründung:
      </HeadlineSmall>
      <Text>
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
      </Text>
      <br />
      <br />
      <TimeLine />
      </ContentContainer2>
      <ContentContainer3>
      <HeadlineSmall2>
      Aus der Galerie
      </HeadlineSmall2>
      <Text>
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
      </Text>
      <ImageContainer>
          <Pics/>
      </ImageContainer>
      </ContentContainer3>
      </Container>

  );
};

export default ContentLandingPage;
