import React from 'react';
import styled from 'styled-components';
import { HeadlineDrawing } from "../../HeadlineDrawing/Index";
import TimeLine from "../../TimeLine2/TimeLine2";
import Header from '../../PagesContent/ContentLandingPage/Header';
import Pics from '../../Pics/Pics';
import Emre from '../../../assets/img/ProfileImages/emre.jpg';

const Container = styled.div`
  width: 100%;

  
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


const HeaderContainer = styled.div`
 
text-align: center;
`;

const ContentContainer2 = styled.div`

margin-left: 2rem;
@media screen and (max-width: 768px) {
  margin-left: 1rem;
  margin-right: auto;
  display: block;
 
}

`;

const ContentContainer3 = styled.div`
width: 70%;
margin-left: 2rem;
@media screen and (max-width: 768px) {
  order: 2;
  margin-left: 1rem;
  margin-right: auto;
  display: block;
 
}


`;

  const HeadlineContainer = styled.div`

  
  
  margin-left: 2rem;
@media screen and (max-width: 768px) {
  order: 2;
  margin-left: 1rem;
  margin-right: auto;
  display: block;
 
}


`;

  const ImageContainer = styled.div`
  width: 100vwimportant!;
`;

const Wrapper = styled.div`

display: flex;
@media screen and (max-width: 768px) {
  flex-direction: column;
 
}
`;

const TimeLineContainer = styled.div`
width: 100%;


`;




const ContentLandingPage = () => {
  return (

    
       <Container>
          <HeaderContainer>
         <Header/>
       </HeaderContainer>
       
       <br />
      <br />
      <Wrapper>
      <ContentContainer2>  
      <HeadlineSmall2>
      Teamchemie
      </HeadlineSmall2>
      <Text>
      Bei den BadBoys zählen vor allem Teamgeist und Wille. Die Komponente Attraktivität wird direkt 
      im ersten Probetraining, sowie im ersten Training jedes neuen Jahres, regelmäßigen Kontrollen unterzogen.
      Die Problematik rund um das Thema Ausdauer wird durch den Athletikstab um dessen Leiter Sascha Sievert
      mithilfe engagierter Tabata-Einheiten proaktiv angegangen. 
      </Text>
      </ContentContainer2>
      
      <br />
      <br />
      <HeadlineContainer>
        <HeadlineDrawing></HeadlineDrawing>
      </HeadlineContainer>
      </Wrapper>
      

      <Wrapper>
      <ContentContainer2>  
      <HeadlineSmall2>
      Erfolge
      </HeadlineSmall2>
      <Text>
      Neben den direkten Aufstiegen in die Spielklassen B und A und dem Einzug ins Pokalhalbfinale, wo man sich nur denkbar knapp einem Landesligisten aus
      dem Spandauer Speckgürtel geschlagen geben musste, fand der eigentliche Coup im Norden der Bundesrepublik statt.
      Hier wussten die BadBoys nicht nur in der dritten Halbzeit zu überzeugen, sondern dominierten vom Anstoß weg das von 
      internationalen Topteams gespickte Teilnehmerfeld (Spieker Wurster, SV Groß Borstel (U19) und eine Integrationsmannschaft) beim Bangoura-Cup 2019.
      

      </Text>
      </ContentContainer2>
      
      <br />
      <br />
      
      </Wrapper>
      <br />
      <br />
      <br />
      <TimeLineContainer>
      <TimeLine />
      </TimeLineContainer>
      <br />
      
      
      <Wrapper>
      <ContentContainer2>  
      <HeadlineSmall2>
      Galerie
      </HeadlineSmall2>
      <Text>
      Neben den direkten Aufstiegen in die Spielklassen B und A und dem Einzug ins Pokalhalbfinale, wo man sich nur denkbar knapp einem Landesligisten aus
      dem Spandauer Speckgürtel geschlagen geben musste, fand der eigentliche Coup im Norden der Bundesrepublik statt.
      Hier wussten die BadBoys nicht nur in der dritten Halbzeit zu überzeugen, sondern dominierten vom Anstoß weg das von 
      internationalen Topteams gespickte Teilnehmerfeld (Spieker Wurster, SV Groß Borstel (U19) und eine Integrationsmannschaft) beim Bangoura-Cup 2019.
      

      </Text>
      </ContentContainer2>
      </Wrapper>
      <ImageContainer>
          <Pics/>
      </ImageContainer>
      
     
      </Container>

  );
};

export default ContentLandingPage;
