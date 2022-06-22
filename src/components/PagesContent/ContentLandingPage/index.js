import React from "react";
import styled from "styled-components";
import HeadlineDrawing from "../../ChartDrawing/ContentChardDrawing.js";
import TimeLine from "../../TimeLineErfolge/TimeLineErfolge";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import PropsNewsCard from "../../Card/News/NewsContent.js";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "./index.css";

const theme = createTheme({
  status: {
    danger: "#e53e3e",
  },
  palette: {
    primary: {
      main: "#FFFFFF",
      darker: "#053e85",
    },
  },
});

const Headline = styled.h1`
  line-height: 1;
  margin-bottom: 1rem;
  color: white;
  margin-top: 8rem;

  @media (max-width: 768px) {
    text-align: center;
    font-size: 2rem;
  }
`;

const SubHeadline = styled.h2`
  line-height: 1;
  margin-bottom: 1rem;
  color: white;
  margin-top: 2rem;
  @media (max-width: 768px) {
    text-align: center;
    font-size: 2rem;
  }
`;

const HeadlineSmall = styled.h2`
  line-height: 1;
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    text-align: center;
    font-size: 2.2rem;
  }
`;

const Text = styled.p`
  margin: 10px;
  color: black;
  margin-top: 3rem;
  @media screen and (max-width: 768px) {
    font-size: 0.9rem;
    text-align: center;
  }
`;

const ButtonContainer = styled.div`
  margin-top: 1rem;
  margin-bottom: 5rem;
  @media screen and (max-width: 768px) {
   
  }
`;

const ContentContainer = styled.div`
  margin-left: 10rem;
  margin-right: 2rem;

  @media screen and (max-width: 768px) {
    margin-left: 3rem;
    margin-right: 3rem;
    display: block;
  }
`;

const HeadlineDrawingContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1.25rem;
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
  margin-top: 3rem;
`;

const Boxes = styled.div`
  overflow: hidden;
  width: 100%;
  margin: 0 auto;
  box-shadow: 0px 12px 18px -6px rgba (0, 0, 0, 0.3);
  border-radius: 10px 10px 10px 10px;
  object-fit: contain;
`;


const Background = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0.527),rgba(0, 0, 0, 0.8)) , url("https://images.unsplash.com/photo-1556816213-fe43a7b26d5d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 100vh;
  position: relative;
  margin-bottom: 5rem;
  overflow: hidden;
  @media screen and (max-width: 768px) {
    margin-bottom: 1rem;
  }
`;

const HeaderContainer = styled.div`
  text-align: center;
  margin-top: 25rem;
  
`;

const HeadlineTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  
`;

const ContentLandingPage = () => {
  const newscontent = [
    {
      id: "1",
      title: " BadBoys vs. BW Hohen Neuendorf",
      description:
        "Unglücklicher Saisonabschluss der BadBoys - wir sehen uns nächstes Jahr!",
      image: (
        <img
          alt="lol"
          src="https://www.fifplay.com/img/public/bundesliga-logo.png"
        ></img>
      ),
      link: "https://www.fussball.de/spiel/bw-hohen-neuendorf-ii-frohnauer-sc-ii/-/spiel/02F2CBO0VK000000VS5489B4VS0OFO4E",
    },
    {
      id: "2",
      title: "BadBoys vs. BFC Südring II",
      description:
        "Lockerer Aufgalopp im Esso 36 - BadBoys machen das halbe Dutzend komplett!",
      image: (
        <img
          alt="ms"
          src="https://www.fifplay.com/img/public/bundesliga-logo.png"
        />
      ),
      link: "https://www.fussball.de/spiel/bsc-eintracht-suedring-ii-frohnauer-sc-ii/-/spiel/02F2CBO2A8000000VS5489B4VS0OFO4E",
    },
    {
      id: "3",
      title: "Pokalhalbfinale",
      description:
        "Viel vorgenommen, wenig hinbekommen. Deutliche Niederlage gegen die Reserve von Viktoria.",
      image: (
        <img
          alt="lol"
          src="https://b04-ep-media-prod.azureedge.net/pickerimages/DFB-Pokal_Logo_2016_Kleinklein_203932_M.png"
        ></img>
      ),
      link: "https://www.fussball.de/spiel/viktoria-berlin-ii-frohnauer-sc-ii/-/spiel/02HDJND0GG000000VS5489B3VU9MQG4F#!/",
    },
  ];

  return (
       <>
         <Background>
              <HeaderContainer>
                <Headline>
                  Frohnauer SC II
                </Headline>
                <SubHeadline>
                  "Badboys"
                </SubHeadline>
              </HeaderContainer>
               <HeadlineTextContainer>
         
          <ButtonContainer>
            <Link to="/Team" style={{ textDecoration: 'none' }}>
            <ThemeProvider theme={theme}>
              <Button
                variant="outlined"
                color="primary"
                style={{ color: "white" }}
              >
                Mannschaft
              </Button>
            </ThemeProvider>
          </Link>
          &nbsp;&nbsp;
          <Link to="/Tabelle" style={{ textDecoration: "none" }}>
            <ThemeProvider theme={theme}>
              <Button
                variant="outlined"
                color="primary"
                style={{ color: "white" }}
              >
                Tabelle
              </Button>
            </ThemeProvider>
          </Link>
        </ButtonContainer>
        </HeadlineTextContainer>
        </Background>
   

      <br />
      <br />
      <br />
      <br />
      <br />
      <Wrapper>
        <PropsNewsCard newscards={newscontent} />
      </Wrapper>
      <br />
      <br />
      <br />
      <br />
      <br />

      <Wrapper>
        <ContentContainer>
          <HeadlineSmall>Teamchemie</HeadlineSmall>
          <br />
          <Boxes>
            <Text>
              Bei den BadBoys zählen vor allem Teamgeist und Wille. Die
              Komponente Attraktivität wird direkt im ersten Probetraining,
              sowie im ersten Training jedes neuen Jahres, regelmäßigen
              Kontrollen unterzogen. Die Problematik rund um das Thema Ausdauer
              wird durch den Athletikstab um dessen Leiter Sascha Sievert
              mithilfe engagierter Tabata-Einheiten proaktiv angegangen.
            </Text>
          </Boxes>
        </ContentContainer>
        <HeadlineDrawingContainer>
          <HeadlineDrawing />
        </HeadlineDrawingContainer>
      </Wrapper>
      <Wrapper>
        <ContentContainer>
          <HeadlineSmall>Erfolge</HeadlineSmall>
        </ContentContainer>
      </Wrapper>
      <TimeLineContainer>
        <TimeLine />
      </TimeLineContainer>
      <br />
      <br />
      <br />
      <br />
      <br />
    </>
  );
};

export default ContentLandingPage;
