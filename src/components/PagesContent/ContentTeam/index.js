import DetailsPlayers from '../../Card/Players/CardFramePlayerContent';
import styled  from 'styled-components';
import DetailsCoaches from '../../Card/Coaches/CardFrameCoachContent';
import SG from '../../../assets/img/ProfileImages/globig.jpg';
import CH from '../../../assets/img/ProfileImages/claudius.jpg';
import XB from '../../../assets/img/ProfileImages/xaver.jpg';
import JM from '../../../assets/img/ProfileImages/justin.jpg';
import JH from '../../../assets/img/ProfileImages/jakob.jpg';
import ES from '../../../assets/img/ProfileImages/emre.jpg';
import ML from '../../../assets/img/ProfileImages/matti.jpg';
import PC from '../../../assets/img/ProfileImages/paul.jpg';
import MS from '../../../assets/img/ProfileImages/moritz.jpg';
import SS from '../../../assets/img/ProfileImages/sascha.jpg';
import UG from '../../../assets/img/ProfileImages/uwe.jpg';

const Container = styled.div`
  padding: 1rem;
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
color: white;
`;

const Text = styled.div`
  font-size: 1.2rem;
`;

const ContentTeam = () => {
  const profilesCoaches = [
    {
      name: 'Uwe Großmann',
      saison: '2022/2023',
      verein: 'Frohnauer SC II',
      position: 'TR',
      jahr: '2018',
      status: 'Taktikfuchs',
      avatar: <img alt="ug" src={UG} />,
      link: 'https://www.fupa.net/player/uwe-grossmann-508703',
    },
    { 
    name: 'Sascha Sievert',
    saison: '2022/2023',
    verein: 'Frohnauer SC II',
    position: 'TR',
    jahr: '2018',
    status: 'Tabata-Großmeister',
    avatar: <img alt="ss" src={SS} />,
    link: 'https://www.fupa.net/player/sascha-sievert-587369',
  },
  ]

  const profilesPlayers = [
    {
      name: 'Simon Globig',
      saison: '2022/2023',
      verein: 'Frohnauer SC II',
      position: 'TW',
      jahr: '2017',
      status: 'Jura-Titan',
      avatar: <img alt="ch" src={SG} />,
      link: 'https://www.fupa.net/player/simon-globig-1444663',
    },
    { 
    name: 'Xaver Bunzel',
    saison: '2022/2023',
    verein: 'Frohnauer SC II',
    position: 'IV',
    jahr: '2004',
    status: 'Twistolero',
    avatar: <img alt="ch" src={XB} />,
    link: 'https://www.fupa.net/player/xaver-bunzel-lingens-1119657',
  },
    {
      id: '3',
      name: 'Claudius Haensler',
      saison: '2022/2023',
      verein: 'Frohnauer SC II',
      position: 'IV',
      jahr: '2012',
      status: 'Aggressor',
      avatar: <img alt="ch" src={CH} />,
      link: 'https://www.fupa.net/player/claudius-haensler-1665429',
    },

    {
      id: '4',
      name: 'Josip Ramljak',
      saison: '2022/2023',
      verein: 'Frohnauer SC II',
      position: 'IV',
      jahr: '2020',
      status: 'Kroatischer Veteran',
      avatar: 'JR',
      link: 'https://www.fupa.net/player/josip-ramljak-778146',
    },

    {
      id: '5',
      name: 'Justin Mohs',
      saison: '2022/2023',
      verein: 'Frohnauer SC II',
      position: 'RV',
      jahr: '2010',
      status: 'Capitano',
      avatar: <img alt="jm" src={JM} />,
      link: 'https://www.fupa.net/player/justin-mohs-845294',
    },

    {
      id: '6',
      name: 'Frederik Dunkel',
      saison: '2022/2023',
      verein: 'Frohnauer SC II',
      position: 'RV',
      jahr: '2017',
      status: 'Lübarser Jung',
      avatar: 'FD',
      link: 'https://www.fupa.net/player/frederik-dunkel-1074708',
    },

    {
      id: '7',
      name: 'Basti Schneider',
      saison: '2022/2023',
      verein: 'Frohnauer SC II',
      position: 'RV',
      jahr: '2017',
      status: 'Schusswunder',
      avatar: 'BS',
      link: 'https://www.fupa.net/player/sebastian-schneider-1141554',
    },

    {
      id: '8',
      name: 'Malte Räuchle',
      saison: '2022/2023',
      verein: 'Frohnauer SC II',
      position: 'ZDM',
      jahr: '2002',
      status: 'Sport-Invalide',
      avatar: 'MR',
      link: 'https://www.fupa.net/player/malte-raeuchle-845287',
    },

    {
      id: '9',
      name: 'Marlon Merten',
      saison: '2022/2023',
      verein: 'Frohnauer SC II',
      position: 'ZDM',
      jahr: '2021',
      status: 'Breit wie hoch',
      avatar: 'MM',
      link: 'https://www.fupa.net/player/marlon-merten-1764941',
    },

    {
      id: '10',
      name: 'Jakob von Holst',
      saison: '2022/2023',
      verein: 'Frohnauer SC II',
      position: 'ZDM',
      jahr: '2004',
      status: 'Weißer Brasilianer',
      avatar: <img alt="jh" src={JH} />,
      link: 'https://www.fupa.net/player/jakob-von-holst-1119752',
    },

    {
      id: '11',
      name: 'Younes Badi',
      saison: '2022/2023',
      verein: 'Frohnauer SC II',
      position: 'ZDM',
      jahr: '2005',
      status: 'Arbeitstier',
      avatar: 'YB',
      link: 'https://www.fupa.net/player/younes-badi-1754044',
    },

    {
      id: '12',
      name: 'Emre Sahin',
      saison: '2022/2023',
      verein: 'Frohnauer SC II',
      position: 'ZDM',
      jahr: '2005',
      status: 'Sahin-Bomber',
      avatar: <img alt="es" src={ES} />,
      link: 'https://www.fupa.net/player/veli-sahin-1311615',

    },

    {
      id: '13',
      name: 'Matti Liebermann',
      saison: '2022/2023',
      verein: 'Frohnauer SC II',
      position: 'RF',
      jahr: '2010',
      status: 'Fifa Pro',
      avatar: <img alt="ml" src={ML} />,
      link: 'https://www.fupa.net/player/matti-liebermann-1754451',
    },

    {
      id: '14',
      name: 'Steven Kaßburg',
      saison: '2022/2023',
      verein: 'Frohnauer SC II',
      position: 'LF',
      jahr: '2014',
      status: 'Stevie',
      avatar: 'SK',
      link: 'https://www.fupa.net/player/steven-kassburg-1371361',
    },

    {
      id: '15',
      name: 'Max Wilk',
      saison: '2022/2023',
      verein: 'Frohnauer SC II',
      position: 'RF',
      jahr: '2008',
      status: 'Laufwunder',
      avatar: 'MW',
      link: 'https://www.fupa.net/player/maximilian-wilk-1371358',
    },

    {
      id: '16',
      name: 'Joao Dos Santos',
      saison: '2022/2023',
      verein: 'Frohnauer SC II',
      position: 'RF',
      jahr: '2021',
      status: 'TikTok-Star',
      avatar: 'JS',
      link: 'https://www.fupa.net/player/joao-dias-dos-santos-1764232',
    },

    {
      id: '17',
      name: 'Luca Kluge',
      saison: '2022/2023',
      verein: 'Frohnauer SC II',
      position: 'ZOM',
      jahr: '2010',
      status: 'Bella Ciao',
      avatar: 'LK',
      link: 'https://www.fupa.net/player/luca-kluge-1413395',
    },

    {
      id: '18',
      name: 'Justus Lemgau',
      saison: '2022/2023',
      verein: 'Frohnauer SC II',
      position: 'ZOM',
      jahr: '2007',
      status: 'Allergie: Passspiel',
      avatar: 'JL',
      link: 'https://www.fupa.net/player/justus-lemgau-1933698',
    },

    {
      id: '19',
      name: 'Victorio Herz',
      saison: '2022/2023',
      verein: 'Frohnauer SC II',
      position: 'ZOM',
      jahr: '2021',
      status: 'Silent Killer',
      avatar: 'VH',
      link: 'https://www.fupa.net/player/victorio-herz-846512',
    },

    {
      id: '20',
      name: 'Paul Conradt',
      saison: '2022/2023',
      verein: 'Frohnauer SC II',
      position: 'ST',
      jahr: '2011',
      status: ' Kreisliga-Ronaldo',
      avatar: <img alt="pc" src={PC} />,
      link: 'https://www.fupa.net/player/paul-conradt-845302',
    },
  {
    id: 'e21',
    name: 'Philipp Renke ',
    saison: '2022/2023',
    verein: 'Frohnauer SC II',
    position: 'ST',
    jahr: '2010',
    status: 'Renke',
    link: 'https://www.fupa.net/player/philipp-renke-1006370',
  },

  {
    id: 'e22',
    name: 'Moritz Stoll',
    saison: '2022/2023',
    verein: 'Frohnauer SC II',
    position: 'ST',
    jahr: '2010',
    status: 'Torjäger',
    avatar: <img alt="ms" src={MS} />,
    link: 'https://www.fupa.net/player/moritz-stoll-845270',
  },

  ];
  return (

<Container>
<Headline>
  Team
</Headline>
<Text>
 Der aktuelle Kader der BadBoys der Saison 2021/2022 der Kreisliga A Staffel 1.
</Text>  
<br />
<br />
<PlayerContainer>
<DetailsPlayers players={profilesPlayers}/> 
</PlayerContainer>
<br />
<Text>Trainerteam</Text>
<br />
<DetailsCoaches coaches={profilesCoaches}/>

</Container>
  );
};

export default ContentTeam;
