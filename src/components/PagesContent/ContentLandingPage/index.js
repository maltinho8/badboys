import React from "react";
import styled from "styled-components";
import HeadlineDrawing from "../../ChartDrawing/ContentChardDrawing.js";
import TimeLine from "../../TimeLineErfolge/TimeLineErfolge";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import PropsNewsCard from "../../Card/News/NewsContent.js";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Video from "../../../assets/video/video.mp4";
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
    margin-top: 1rem;
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
  margin-right: 0.7rem;

  @media screen and (max-width: 768px) {
    margin-bottom: 20rem;
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

const ContentLandingPage = () => {
  const newscontent = [
    {
      id: "1",
      title: " BadBoys vs. BFC Südring II",
      description:
        "Lockerer Aufgalopp im Herzen von Berlin - die BadBoys schenken ein halbes Dutzend ein.",
      image: (
        <img
          alt="lol"
          src="https://www.fifplay.com/img/public/bundesliga-logo.png"
        ></img>
      ),
      link: "https://www.fupa.net/match/berliner-sv-92-m2-frohnauer-sc-1946-m2-220320",
    },
    {
      id: "2",
      title: "BadBoys vs. SV Nord Wedding",
      description:
        "Spielwitz der BadBoys provoziert 5 rote Karten beim Aufstiegsaspiranten - verdienter Erfolg.",
      image: (
        <img
          alt="ms"
          src="https://www.fifplay.com/img/public/bundesliga-logo.png"
        />
      ),
      link: "https://www.fupa.net/match/frohnauer-sc-1946-m2-fsv-berolina-stralau-1901-m2-220313",
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
      link: "https://www.fupa.net/player/sascha-sievert-587369",
    },
  ];

  return (
    <>
      <video src={Video} autoPlay loop muted id="video" />

      <div className="headcontent">
        <Headline>Frohnauer SC II</Headline>

        <ButtonContainer>
          <Link to="/Team" style={{ textDecoration: "none" }}>
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
      </div>

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
