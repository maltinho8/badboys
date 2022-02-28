import React, {useEffect} from 'react';
import styled from 'styled-components';
import { HeadlineDrawing } from "../../HeadlineDrawing";
import TimeLine from "../../TimeLine2/TimeLine2";
import Pics from '../../Pics/Pics';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Button from '@mui/material/Button';
import {Link} from "react-router-dom";

const Container = styled.div`
  width: 100%; 
`;

const Headline = styled.h4`
  font-size: 6rem;
  line-height: 1;
  margin-bottom: 4rem;
  color: white;
  margin-top: 8rem;
  
  @media (max-width: 768px) { 
    text-align: center; 
    font-size: 4rem;
    margin-top: 7rem;
  }
`;


const HeadlineSmall = styled.h4`
  font-size: 2.5rem;
  line-height: 1;
  margin-bottom: 1.5rem;
  color: white;
  
  @media (max-width: 768px) { 
    text-align: center; 
  }

`;

const TextHeader = styled.p`
  font-size: 1.0rem;
  color: white;
  @media screen and (max-width: 768px) {
    font-size: 1rem;
    text-align: center;   
  }
`;



const Text = styled.p`
  font-size: 0.9rem;
  color: white;
  margin: 10px;
  @media screen and (max-width: 768px) {
    font-size: 1rem;
    text-align: center;
  }
`;


const HeaderContainer = styled.div`
text-align: center;
`;

const ButtonContainer = styled.div`
margin-top: 1rem;
`;

const HeadlineTextContainer = styled.div`
display: flex;
flex-direction: column;
align-items: end;
margin: 3rem 7rem 0 0;

@media screen and (max-width: 768px) {
  margin: 2rem 0 0 0;
  align-items: center;
}
`;



const ContentContainer = styled.div`
margin-left: 5rem;
margin-right: 5rem;

@media screen and (max-width: 768px) {
  margin-left: 3rem;
  margin-right: 3rem;
  display: block;
 
}
`;

const HeadlineDrawingContainer = styled.div`
display: flex;
justify-content: center;
`;

const ImageContainer = styled.div`
  width: 100%;
`;

const Wrapper = styled.div`

display: flex;
margin-top: 1rem;
margin-bottom: 1rem;

@media screen and (max-width: 768px) {
  flex-direction: column;
}
`;

const TimeLineContainer = styled.div`
margin-top:3rem;
`;

const Boxes = styled.div`


border: 1px solid orange;
overflow: hidden;

box-shadow: 0px 12px 18px -6px rgba (0,0,0,0.3);
border-radius: 10px 10px 10px 10px;
object-fit: contain;
`;

const BoxesHeader = styled.div`
width: 15rem;
overflow: hidden;
box-shadow: 0px 12px 18px -6px rgba (0,0,0,0.3);
border-radius: 10px 10px 10px 10px;
object-fit: contain;
`;

const BackgroundSection1 = styled.div`
background-color: black;
opacity: 0.7;
`;

const ContentLandingPage = () => {
  useEffect(() => {
    Aos.init({duration: 2000});
  }, []);
  return (


       <Container>
         
         <HeadlineTextContainer>
      <BoxesHeader>
      <TextHeader>
      Spätestens seit dem furiosen Reeperbahn-Auftritt 2019 erlangten die BadBoys internationale Bekanntheit. Dem
      Durchmarsch von der Kreisliga C in die Kreisliga A soll nun auch der Schritt in den bezahlten Profifussball folgen.
      </TextHeader>
      </BoxesHeader>
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
      </HeadlineTextContainer>
         <HeaderContainer>
        <Headline>
      BADBOYS
      </Headline>
      </HeaderContainer>
      <BackgroundSection1>
      <Wrapper>
      <ContentContainer>
      <HeadlineSmall>
      Teamchemie
      </HeadlineSmall>
      <Boxes>
      <Text>
      Bei den BadBoys zählen vor allem Teamgeist und Wille. Die Komponente Attraktivität wird direkt
      im ersten Probetraining, sowie im ersten Training jedes neuen Jahres, regelmäßigen Kontrollen unterzogen.
      Die Problematik rund um das Thema Ausdauer wird durch den Athletikstab um dessen Leiter Sascha Sievert
      mithilfe engagierter Tabata-Einheiten proaktiv angegangen.
      </Text>
      </Boxes>
      </ContentContainer>

      <HeadlineDrawingContainer>
        <HeadlineDrawing />
      </HeadlineDrawingContainer>
      </Wrapper>
      </BackgroundSection1>

      
      <Wrapper>
      <ContentContainer>
      <HeadlineSmall>
      Erfolge
      </HeadlineSmall>
      <Boxes data-aos="fade-left">
      <Text>
      Neben den direkten Aufstiegen in die Spielklassen B und A und dem Einzug ins Pokalhalbfinale, wo man sich nur denkbar knapp einem Landesligisten aus
      dem Spandauer Speckgürtel geschlagen geben musste, fand der eigentliche Coup im Norden der Bundesrepublik statt.
      Hier wussten die BadBoys nicht nur in der dritten Halbzeit zu überzeugen, sondern dominierten vom Anstoß weg das von
      internationalen Topteams gespickte Teilnehmerfeld (Spieker Wurster, SV Groß Borstel (U19) und eine Integrationsmannschaft) beim Bangoura-Cup 2019.
      </Text>
      </Boxes>
      </ContentContainer>
      </Wrapper>
      
      <TimeLineContainer>
      <TimeLine />
      </TimeLineContainer>
      
      <Wrapper>
      <ContentContainer>
      <HeadlineSmall>
      Impressionen
      </HeadlineSmall>
      <Boxes data-aos="fade-left">
      <Text>
      Neben den direkten Aufstiegen in die Spielklassen B und A und dem Einzug ins Pokalhalbfinale, wo man sich nur denkbar knapp einem Landesligisten aus
      dem Spandauer Speckgürtel geschlagen geben musste, fand der eigentliche Coup im Norden der Bundesrepublik statt.
      Hier wussten die BadBoys nicht nur in der dritten Halbzeit zu überzeugen, sondern dominierten vom Anstoß weg das von
      internationalen Topteams gespickte Teilnehmerfeld (Spieker Wurster, SV Groß Borstel (U19) und eine Integrationsmannschaft) beim Bangoura-Cup 2019.

      </Text>
      </Boxes>

      </ContentContainer>
      </Wrapper>
      <ImageContainer>
          <Pics/>
      </ImageContainer>
      
      </Container>

  );
};

export default ContentLandingPage;