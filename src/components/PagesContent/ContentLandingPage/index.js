import React, {useEffect} from 'react';
import styled from 'styled-components';
import { HeadlineDrawing } from "../../HeadlineDrawing";
import TimeLine from "../../TimeLine2/TimeLine2";
import Aos from 'aos';
import 'aos/dist/aos.css';
import Button from '@mui/material/Button';
import {Link} from "react-router-dom";
import PropsNewsCard from './NewsCard/NewsCardContent';

const Container = styled.div`
  width: 100%; 
`;

const Headline = styled.h4`
  font-size: 6rem;
  line-height: 1;
  margin-bottom: 6rem;
  color: white;
  margin-top: 2rem;
  
  @media (max-width: 768px) { 
    text-align: center; 
    font-size: 3rem;
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

const VerticalHeadline = styled.h5`
  
  line-height: 1;
  margin-bottom: 10rem;
  color: white;
  margin-top: -18rem;
 
  margin-left: 15rem;
  writing-mode: vertical-rl;
  text-orientation: mixed;
  
  @media (max-width: 768px) { 
    display:none;
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
  
  color: white;
  margin: 10px;
  @media screen and (max-width: 768px) {
    font-size: 0.9rem;
    text-align: center;
  }
`;


const HeaderContainer = styled.div`
text-align: center;
`;

const VerticalContainer = styled.div`
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
width: 100%;
margin: 0 auto;
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

  const newscards = [
    {
      title: 'vs. SV Union 06',
      description: 'Am Wochenende ging es wieder hoch her auf der Poloritze im Norden von Berlin. Zu Gast war die Mannschaft von SV Union 06.'
      
    },
    { 
    title: 'vs. BSV 92',
    description: 'Am Wochenende ging es wieder hoch her auf der Poloritze im Norden von Berlin. Zu Gast war die Mannschaft von BSV 92.'
    
  },
  { 
    title: 'Pokalhalbfinale',
    description: 'Kommendes Wochenende ist es mal wieder so weit: Die BadBoys sind in ihrem Lieblingswettbewerb wieder im Halbfinale.'
    
  },
  ]

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
      <VerticalContainer>
        <VerticalHeadline>
      BADBOYS Saison 2021/2022
      </VerticalHeadline>
      </VerticalContainer>
         <HeaderContainer>
        <Headline>
      Frohnauer SC II.
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
      Aktuelles
      </HeadlineSmall>
      <PropsNewsCard props={newscards}/> 
      </ContentContainer>
        
      
      
      </Wrapper>
      
      <br />
      <br />

      
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
      <br />
      <br />


      {/*
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
  */}
      
      </Container>

  );
};

export default ContentLandingPage;