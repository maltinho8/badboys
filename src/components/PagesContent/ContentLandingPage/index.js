import React, {useEffect} from 'react';
import styled from 'styled-components';
import { HeadlineDrawing } from "../../HeadlineDrawing/Index";
import TimeLine from "../../TimeLine2/TimeLine2";
import Header from './Header';
import Pics from '../../Pics/Pics';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Bild from '../../../assets/img/reeperbahn.jpg';
import Button from '@mui/material/Button';
import {Link} from "react-router-dom";

const Container = styled.div`
  width: 100%;

  
`;

const HeadlineSmall = styled.h4`
  font-size: 6rem;
  line-height: 1;
  margin-bottom: 3rem;
  color: white;
  margin-top: 9rem;
  @media (max-width: 768px) { 
    text-align: center; 
  }

`;


const HeadlineSmall2 = styled.h4`
  font-size: 2.5rem;
  line-height: 1;
  margin-bottom: 1.5rem;
  color: white;
  @media (max-width: 768px) { 
    text-align: center; 
  }

`;

const TextHeader = styled.p`
  font-size: 0.9rem;
  color: white;
  margin: 10px;
  @media screen and (max-width: 768px) {
    font-size: 1rem;
    text-align: center;
    
   
  }
`;



const Text = styled.p`
  font-size: 1.2rem;
  color: white;
  margin: 10px;
  @media screen and (max-width: 768px) {
    font-size: 1rem;
    text-align: center;
    
   
  }
`;

const TextVertical = styled.div`
  font-size: 1.2rem;
  color: white;
  transform: rotate(-90deg);
  margin-right: 58rem;
  margin-bottom: 5rem;
`;


const HeaderContainer = styled.div`
 
text-align: center;

`;

const ButtonContainer = styled.div`
 
margin-left: 50.6rem;
margin-top: 1rem;

`;



const ContentContainer2 = styled.div`

margin-left: 5rem;
margin-right: 5rem;


@media screen and (max-width: 768px) {
  margin-left: 3rem;
  margin-right: 3rem;
  display: block;
 
}
`;

  const HeadlineContainer = styled.div`
  position: relative;
  left: 50px;
@media screen and (max-width: 768px) {
  order: 2;
  margin-left: 1rem;
  margin-right: auto;
  display: none;
 
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
`;

const Grids = styled.div`
    max-width:100%;
    margin-left: 2rem;
    @media screen and (max-width: 768px) {
      max-width: 80%;
      margin: auto;
     
    }
`;

const Boxes = styled.div`


border: 1px solid orange;
overflow: hidden;

box-shadow: 0px 12px 18px -6px rgba (0,0,0,0.3);
border-radius: 10px 10px 10px 10px;
object-fit: contain;
`;

const BoxesHeader = styled.div`


margin-top: 5rem;
margin-left: 50rem;
margin-right: 2rem;
width: 30%;
overflow: hidden;
box-shadow: 0px 12px 18px -6px rgba (0,0,0,0.3);
border-radius: 10px 10px 10px 10px;
object-fit: contain;
`;




const ContentLandingPage = () => {
  useEffect(() => {
    Aos.init({duration: 2000});
  }, []);
  return (

    
       <Container>
         <Wrapper>
         <ContentContainer2>  
      
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
      
      </ContentContainer2>
      </Wrapper>
         <HeaderContainer>
        <HeadlineSmall>
      BADBOYS
      </HeadlineSmall>
      </HeaderContainer>
       
       <br />
      <br />
      <Wrapper>
      <ContentContainer2>  
      <HeadlineSmall2>
      Teamchemie
      </HeadlineSmall2>
      <Boxes>
      <Text>
      Bei den BadBoys zählen vor allem Teamgeist und Wille. Die Komponente Attraktivität wird direkt 
      im ersten Probetraining, sowie im ersten Training jedes neuen Jahres, regelmäßigen Kontrollen unterzogen.
      Die Problematik rund um das Thema Ausdauer wird durch den Athletikstab um dessen Leiter Sascha Sievert
      mithilfe engagierter Tabata-Einheiten proaktiv angegangen. 
      </Text>
      </Boxes>
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
      <Boxes data-aos="fade-left">
      <Text>
      Neben den direkten Aufstiegen in die Spielklassen B und A und dem Einzug ins Pokalhalbfinale, wo man sich nur denkbar knapp einem Landesligisten aus
      dem Spandauer Speckgürtel geschlagen geben musste, fand der eigentliche Coup im Norden der Bundesrepublik statt.
      Hier wussten die BadBoys nicht nur in der dritten Halbzeit zu überzeugen, sondern dominierten vom Anstoß weg das von 
      internationalen Topteams gespickte Teilnehmerfeld (Spieker Wurster, SV Groß Borstel (U19) und eine Integrationsmannschaft) beim Bangoura-Cup 2019.
      

      </Text>
      </Boxes>
      </ContentContainer2>
      
      
      
      
      </Wrapper>
      <br />
      <br />
      <br />
      <TimeLineContainer>
      <TimeLine />
      </TimeLineContainer>
      <br />
      <br />
      
      <Wrapper>
      <ContentContainer2>  
      <HeadlineSmall2>
      Galerie
      </HeadlineSmall2>
      <Boxes data-aos="fade-left">
      <Text>
      Neben den direkten Aufstiegen in die Spielklassen B und A und dem Einzug ins Pokalhalbfinale, wo man sich nur denkbar knapp einem Landesligisten aus
      dem Spandauer Speckgürtel geschlagen geben musste, fand der eigentliche Coup im Norden der Bundesrepublik statt.
      Hier wussten die BadBoys nicht nur in der dritten Halbzeit zu überzeugen, sondern dominierten vom Anstoß weg das von 
      internationalen Topteams gespickte Teilnehmerfeld (Spieker Wurster, SV Groß Borstel (U19) und eine Integrationsmannschaft) beim Bangoura-Cup 2019.
      

      </Text>
      </Boxes>
      
      </ContentContainer2>
      </Wrapper>
      <ImageContainer>
          <Pics/>
      </ImageContainer>
      
     
      </Container>

  );
};

export default ContentLandingPage;
