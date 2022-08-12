import DetailsPlayers from "../../Card/Players/CardFramePlayerContent";
import styled from "styled-components";
import DetailsCoaches from "../../Card/Coaches/CardFrameCoachContent";

const Container = styled.div`
  padding: 3rem;
  color: ${({theme}) => theme.palette.text.light};
`;

const PlayerContainer = styled.div`
  @media screen and (max-width: 768px) {
    display: flex;
    justify-content: center;
  }
`;

const Headline = styled.h2`

line-height: 1;
margin-bottom: 2rem;
text-align: center;

`;

const Text = styled.div`
  font-size: 1.2rem;
  color: black;
  text-align: center;
`;

const ContentTeam = () => {
  const profilesCoaches = [
    {
      id: "1",
      name: "Uwe Großmann",
      saison: "2022/2023",
      verein: "Frohnauer SC II",
      position: "TR",
      jahr: "2018",
      status: "Taktikfuchs",
      avatar: <img alt="ug" src={"https://image.fupa.net/player/s4Qn2ssjYpgN/128x128.webp"} />,
      link: "https://www.fupa.net/player/uwe-grossmann-508703",
    },
    {
      id: "2",
      name: "Benno Schaller",
      saison: "2022/2023",
      verein: "Frohnauer SC II",
      position: "TR",
      jahr: "2022",
      status: "Schleifer",
      avatar: <img alt="ss" src={"https://image.fupa.net/player/BmwRCmLu36UR/128x128.webp"} />,
      link: "https://www.fupa.net/player/benno-schaller-574357",
    },
  ];

  const profilesPlayers = [
    {
      id: "1",
      name: "Simon Globig",
      saison: "2022/2023",
      verein: "Frohnauer SC II",
      position: "TW",
      jahr: "2017",
      status: "Jura-Titan",
      avatar: (
        <img
          alt="ch"
          src={"https://image.fupa.net/player/8oeRFKxComVf/128x128.webp"}
          style={{ border: 0, objectFit: "cover", width: 90, height: 90 }}
        />
      ),
      link: "https://www.fupa.net/player/simon-globig-1444663",
    },
    {
      id: "2",
      name: "Mervin Quast",
      saison: "2022/2023",
      verein: "Frohnauer SC II",
      position: "TW",
      jahr: "2022",
      status: "Göttergatte",
      avatar: (
        <img
          alt="ch"
          src={"https://image.fupa.net/player/87FHmsV5svva/200x200.webp"}
          style={{ border: 0, objectFit: "cover", width: 90, height: 90 }}
        />
      ),
      link: "https://www.fupa.net/player/mervin-quast-921429",
    },
    {
      id: "3",
      name: "Xaver Bunzel",
      saison: "2022/2023",
      verein: "Frohnauer SC II",
      position: "IV",
      jahr: "2004",
      status: "El Twistolero",
      avatar: (
        <img
          alt="ch"
          src={"https://image.fupa.net/player/Tk5bBRU18u7t/128x128.webp"}
          style={{ border: 0, objectFit: "cover", width: 90, height: 90 }}
        />
      ),
      link: "https://www.fupa.net/player/xaver-bunzel-lingens-1119657",
    },
    {
      id: "4",
      name: "Claudius Haensler",
      saison: "2022/2023",
      verein: "Frohnauer SC II",
      position: "IV",
      jahr: "2012",
      status: "Aggressor",
      avatar: (
        <img
          alt="ch"
          src={"https://image.fupa.net/player/gqmMRlgF2PZV/128x128.webp"}
          style={{ border: 0, objectFit: "cover", width: 90, height: 90 }}
        />
      ),
      link: "https://www.fupa.net/player/claudius-haensler-1665429",
    },

    {
      id: "5",
      name: "Josip Ramljak",
      saison: "2022/2023",
      verein: "Frohnauer SC II",
      position: "IV",
      jahr: "2020",
      status: "Kroatischer Veteran",
      avatar: (
        <img
          alt="jr"
          src={"https://image.fupa.net/player/kfIANLvG1w9i/128x128.webp"}
          style={{ border: 0, objectFit: "cover", width: 90, height: 90 }}
        />
      ),
      link: "https://www.fupa.net/player/josip-ramljak-778146",
    },
    {
      id: "6",
      name: "Emre Sahin",
      saison: "2022/2023",
      verein: "Frohnauer SC II",
      position: "ZDM",
      jahr: "2005",
      status: "Sahin-Bomber",
      avatar: (
        <img
          alt="es"
          src={"https://image.fupa.net/player/javjoMu3KpNN/128x128.webp"}
          style={{ border: 0, objectFit: "cover", width: 90, height: 90 }}
        />
      ),
      link: "https://www.fupa.net/player/veli-sahin-1311615",
    },

    {
      id: "7",
      name: "Justin Mohs",
      saison: "2022/2023",
      verein: "Frohnauer SC II",
      position: "RV",
      jahr: "2010",
      status: "Capitano",
      avatar: (
        <img
          alt="jm"
          src={"https://image.fupa.net/player/wCeciEfzkr2M/128x128.webp"}
          style={{ border: 0, objectFit: "cover", width: 90, height: 90 }}
        />
      ),
      link: "https://www.fupa.net/player/justin-mohs-845294",
    },

    {
      id: "8",
      name: "Frederik Dunkel",
      saison: "2022/2023",
      verein: "Frohnauer SC II",
      position: "RV",
      jahr: "2017",
      status: "Lübarser Jung",
      avatar: (
        <img
          alt="fd"
          src={"https://image.fupa.net/player/ZWc07nqsNrtt/128x128.webp"}
          style={{ border: 0, objectFit: "cover", width: 90, height: 90 }}
        />
      ),
      link: "https://www.fupa.net/player/frederik-dunkel-1074708",
    },

    {
      id: "9",
      name: "Basti Schneider",
      saison: "2022/2023",
      verein: "Frohnauer SC II",
      position: "RV",
      jahr: "2017",
      status: "Schusswunder",
      avatar: (
        <img
          alt="bs"
          src={"https://image.fupa.net/player/IrPJjLGrzbYT/128x128.webp"}
          style={{ border: 0, objectFit: "cover", width: 90, height: 90 }}
        />
      ),
      link: "https://www.fupa.net/player/sebastian-schneider-1141554",
    },
    {
      id: "10",
      name: "Matteo Galetto",
      saison: "2022/2023",
      verein: "Frohnauer SC II",
      position: "LV",
      jahr: "2022",
      status: "Rookie 1",
      avatar: (
        <img
          alt="bs"
          src={"https://image.fupa.net/player/wrmCabBFYHnF/128x128.webp"}
          style={{ border: 0, objectFit: "cover", width: 90, height: 90 }}
        />
      ),
      link: "https://www.fupa.net/player/matteo-galetto-2040861",
    },
    {
      id: "11",
      name: "Remy Kaiser",
      saison: "2022/2023",
      verein: "Frohnauer SC II",
      position: "RV",
      jahr: "2022",
      status: "Rookie 2",
      avatar: (
        <img
          alt="bs"
          src={"https://image.fupa.net/player/nGam0kBj2E7E/128x128.webp"}
          style={{ border: 0, objectFit: "cover", width: 90, height: 90 }}
        />
      ),
      link: "https://www.fupa.net/player/remy-kaiser-2040860",
    },

    {
      id: "12",
      name: "Malte Räuchle",
      saison: "2022/2023",
      verein: "Frohnauer SC II",
      position: "ZDM",
      jahr: "2002",
      status: "Sport-Invalide",
      avatar: (
        <img
          alt="mr"
          src={"https://image.fupa.net/player/vZdg2pDfVOhF/128x128.webp"}
          style={{ border: 0, objectFit: "cover", width: 90, height: 90 }}
        />
      ),
      link: "https://www.fupa.net/player/malte-raeuchle-845287",
    },
    {
      id: "13",
      name: "Fynn Grothe",
      saison: "2022/2023",
      verein: "Frohnauer SC II",
      position: "ZDM",
      jahr: "2002",
      status: "ist eigentlich 26",
      avatar: (
        <img
          alt="mr"
          src={"https://image.fupa.net/player/tmqtCGARgyqA/128x128.webp"}
          style={{ border: 0, objectFit: "cover", width: 90, height: 90 }}
        />
      ),
      link: "https://www.fupa.net/player/fynn-grothe-844449",
    },
    {
      id: "14",
      name: "Jakob von Holst",
      saison: "2022/2023",
      verein: "Frohnauer SC II",
      position: "ZDM",
      jahr: "2004",
      status: "Hautfarbe: Alpina",
      avatar: (
        <img
          alt="jh"
          src={"https://image.fupa.net/player/mQONqzK7iHPp/128x128.webp"}
          style={{ border: 0, objectFit: "cover", width: 90, height: 90 }}
        />
      ),
      link: "https://www.fupa.net/player/jakob-von-holst-1119752",
    },

    {
      id: "15",
      name: "Steven Kaßburg",
      saison: "2022/2023",
      verein: "Frohnauer SC II",
      position: "LF",
      jahr: "2014",
      status: "Ski-Weltmeister",
      avatar: <img alt="sk" src={"https://image.fupa.net/player/A3l6tMi4bS9l/128x128.webp"} style={{ border: 0, objectFit: "cover", width: 90, height: 90 }}/>,
      link: "https://www.fupa.net/player/steven-kassburg-1371361",
    },

    {
      id: "16",
      name: "Max Wilk",
      saison: "2022/2023",
      verein: "Frohnauer SC II",
      position: "RF",
      jahr: "2008",
      status: "Säufer & Läufer",
      avatar: (
        <img
          alt="mw"
          src={"https://image.fupa.net/player/yVf23kAMJHsB/128x128.webp"}
          style={{ border: 0, objectFit: "cover", width: 90, height: 90 }}
        />
      ),
      link: "https://www.fupa.net/player/maximilian-wilk-1371358",
    },
    {
      id: "17",
      name: "Levi Hellmuth",
      saison: "2022/2023",
      verein: "Frohnauer SC II",
      position: "RF",
      jahr: "2008",
      status: "Säufer & Läufer",
      avatar: (
        <img
          alt="mw"
          src={"https://image.fupa.net/player/yR3wCStqwprs/128x128.webp"}
          style={{ border: 0, objectFit: "cover", width: 90, height: 90 }}
        />
      ),
      link: "https://www.fupa.net/player/levi-hellmuth-2023000",
    },

    {
      id: "18",
      name: "Joao Dos Santos",
      saison: "2022/2023",
      verein: "Frohnauer SC II",
      position: "RF",
      jahr: "2021",
      status: "TikTok-Star",
      avatar: (
        <img
          alt="jd"
          src={"https://image.fupa.net/player/ozcMOp7JacJu/128x128.webp"}
          style={{ border: 0, objectFit: "cover", width: 90, height: 90 }}
        />
      ),
      link: "https://www.fupa.net/player/joao-dias-dos-santos-1764232",
    },

    {
      id: "19",
      name: "Luca Kluge",
      saison: "2022/2023",
      verein: "Frohnauer SC II",
      position: "ZOM",
      jahr: "2010",
      status: "Forza Italia",
      avatar: (
        <img
          alt="lk"
          src={"https://image.fupa.net/player/PhODa2NJlwPp/128x128.webp"}
          style={{ border: 0, objectFit: "cover", width: 90, height: 90 }}
        />
      ),
      link: "https://www.fupa.net/player/luca-kluge-1413395",
    },

    {
      id: "20",
      name: "Victorio Herz",
      saison: "2022/2023",
      verein: "Frohnauer SC II",
      position: "ZOM",
      jahr: "2021",
      status: "Werderaner",
      avatar: (
        <img
          alt="vh"
          src={"https://image.fupa.net/player/lUfeKbAOm1Nj/128x128.webp"}
          style={{ border: 0, objectFit: "cover", width: 90, height: 90 }}
        />
      ),
      link: "https://www.fupa.net/player/victorio-herz-846512",
    },
    {
      id: "21",
      name: "Daniel Omah ",
      saison: "2022/2023",
      verein: "Frohnauer SC II",
      position: "ST",
      jahr: "2022",
      status: "Königstransfer",
      avatar: <img alt="mm" src={"https://image.fupa.net/player/QTllSYPWXzcx/128x128.webp"} style={{ border: 0, objectFit: "cover", width: 90, height: 90 }}/>,
      link: "https://www.fupa.net/player/daniel-omah-2045502",
    },
    {
      id: "22",
      name: "Patrick Igbe ",
      saison: "2022/2023",
      verein: "Frohnauer SC II",
      position: "ST",
      jahr: "2022",
      status: "aged like fine wine",
      avatar: <img alt="mm" src={"https://image.fupa.net/player/CYPvySBkkYZu/128x128.webp"} style={{ border: 0, objectFit: "cover", width: 90, height: 90 }}/>,
      link: "https://www.fupa.net/player/patrick-igbe-2052991",
    },

    {
      id: "23",
      name: "Philipp Renke ",
      saison: "2022/2023",
      verein: "Frohnauer SC II",
      position: "ST",
      jahr: "2010",
      status: "Renke",
      avatar: <img alt="mm" src={"https://image.fupa.net/player/24FOCTGZKR47/128x128.webp"} style={{ border: 0, objectFit: "cover", width: 90, height: 90 }}/>,
      link: "https://www.fupa.net/player/philipp-renke-1006370",
    },
  ];
  return (

<Container>
<Headline>
  Team
</Headline>
<Text>
 Der aktuelle Kader der BadBoys der Saison 2022/2023 der Kreisliga A Staffel 4.
</Text>  
<br />
<br />
<PlayerContainer>
<DetailsPlayers players={profilesPlayers}/> 
</PlayerContainer>
<br />
<br />
<DetailsCoaches coaches={profilesCoaches}/>

<br />


</Container>
  );
};

export default ContentTeam;
