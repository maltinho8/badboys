import Deets from '../../Card/Players/CardFramePlayerContent';
import styled  from 'styled-components';
import DeetsCoach from '../../Card/Coaches/CardFrameCoachContent';
import Grid from "@material-ui/core/Grid";
import SG from '../../../assets/img/ProfileImages/globig.jpg';
import CH from '../../../assets/img/ProfileImages/claudius.jpg';
import XB from '../../../assets/img/ProfileImages/xaver.jpg';
import JM from '../../../assets/img/ProfileImages/justin.jpg';
import JH from '../../../assets/img/ProfileImages/jakob.jpg';
import ES from '../../../assets/img/ProfileImages/emre.jpg';
import ML from '../../../assets/img/ProfileImages/matti.jpg';
import PC from '../../../assets/img/ProfileImages/paul.jpg';
import MS from '../../../assets/img/ProfileImages/moritz.jpg';

const Container = styled.div`
  padding: 1rem;
  color: ${({theme}) => theme.palette.text.light};
  @media screen and (max-width: 768px) {
    
    
  }
  
`;

const PlayerContainer = styled.div`
  @media screen and (max-width: 768px) {
    display: flex;
    justify-content: center;
    
  }
  
`;

const Headline = styled.h2`
font-size: 4rem;
line-height: 1;
margin-bottom: 2rem;
color: white;

`;

const Text = styled.div`
  font-size: 1.2rem;
 
`;

const ContentTeam = () => {
  const profilesCoach = [
    {
      name: 'Uwe Großmann',
      saison: '2022/2023',
      verein: 'Frohnauer SC II',
      position: 'TR',
      jahr: '2017',
      status: 'Taktikfuchs',
      avatar: 'UG',
      link: 'https://www.fupa.net/player/simon-globig-1444663',
    },
    { 
    name: 'Sascha Sievert',
    saison: '2022/2023',
    verein: 'Frohnauer SC II',
    position: 'TR',
    jahr: '2009',
    status: 'Tabata-Großmeister',
    avatar: 'FD',
    link: 'https://www.fupa.net/player/xaver-bunzel-lingens-1119657',
  },
  ]

  const profiles = [
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
    jahr: '2009',
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
      jahr: '2004',
      status: 'Status: Aggressor',
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
      status: 'Status: Veteran',
      avatar: 'JR',
      link: 'https://www.fupa.net/player/josip-ramljak-778146',
    },

    {
      id: '5',
      name: 'Justin Mohs',
      saison: '2022/2023',
      verein: 'Frohnauer SC II',
      position: 'RV',
      jahr: '2013',
      status: 'Status: Drahtig',
      avatar: <img alt="jm" src={JM} />,
      link: 'https://www.fupa.net/player/justin-mohs-845294',
    },

    {
      id: '6',
      name: 'Frederik Dunkel',
      saison: '2022/2023',
      verein: 'Frohnauer SC II',
      position: 'RV/LV',
      jahr: '2017',
      status: 'Status: Lübars',
      avatar: 'FD',
      link: 'https://www.fupa.net/player/frederik-dunkel-1074708',
    },

    {
      id: '7',
      name: 'Basti Schneider',
      saison: '2022/2023',
      verein: 'Frohnauer SC II',
      position: 'RV/LV',
      jahr: '2017',
      status: 'Status: Lübars',
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
      status: 'Status: Champion',
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
      status: 'Status: Stabil',
      avatar: 'MM',
      link: 'https://www.fupa.net/player/marlon-merten-1764941',
    },

    {
      id: '10',
      name: 'Jakob von Holst',
      saison: '2022/2023',
      verein: 'Frohnauer SC II',
      position: 'ZDM',
      jahr: '2021',
      status: 'Status: ?',
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
      status: 'Status: Köln',
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
      status: 'Status: ?',
      avatar: <img alt="es" src={ES} />,
      link: 'https://www.fupa.net/player/veli-sahin-1311615',

    },

    {
      id: '13',
      name: 'Matti Liebermann',
      saison: '2022/2023',
      verein: 'Frohnauer SC II',
      position: 'RF/LF',
      jahr: '2005',
      status: 'Status: ?',
      avatar: <img alt="ml" src={ML} />,
      link: 'https://www.fupa.net/player/matti-liebermann-1754451',
    },

    {
      id: '14',
      name: 'Steven Kaßburg',
      saison: '2022/2023',
      verein: 'Frohnauer SC II',
      position: 'RF/LF',
      jahr: '2010',
      status: 'Status: ?',
      avatar: 'SK',
      link: 'https://www.fupa.net/player/steven-kassburg-1371361',
    },

    {
      id: '15',
      name: 'Max Wilk',
      saison: '2022/2023',
      verein: 'Frohnauer SC II',
      position: 'RF/LF',
      jahr: '2010',
      status: 'Status: ?',
      avatar: 'MW',
      link: 'https://www.fupa.net/player/maximilian-wilk-1371358',
    },

    {
      id: '16',
      name: 'Joao Dos Santos',
      saison: '2022/2023',
      verein: 'Frohnauer SC II',
      position: 'RF/LF',
      jahr: '2010',
      status: 'Status: ?',
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
      status: 'Status: ?',
      avatar: 'LK',
      link: 'https://www.fupa.net/player/luca-kluge-1413395',
    },

    {
      id: '18',
      name: 'Justus Lemgau',
      saison: '2022/2023',
      verein: 'Frohnauer SC II',
      position: 'ZOM',
      jahr: '2010',
      status: 'Status: ?',
      avatar: 'JL',
      link: 'https://www.fupa.net/player/justus-lemgau-1933698',
    },

    {
      id: '19',
      name: 'Victorio Herz',
      saison: '2022/2023',
      verein: 'Frohnauer SC II',
      position: 'ZOM',
      jahr: '2010',
      status: 'Status: ?',
      avatar: 'VH',
      link: 'https://www.fupa.net/player/victorio-herz-846512',
    },

    {
      id: '20',
      name: 'Paul Conradt',
      saison: '2022/2023',
      verein: 'Frohnauer SC II',
      position: 'ST',
      jahr: '2010',
      status: 'Status: Kreisliga-Ronaldo',
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
    status: 'Status: ?',
    link: 'https://www.fupa.net/player/philipp-renke-1006370',
  },

  {
    id: 'e22',
    name: 'Moritz Stoll',
    saison: '2022/2023',
    verein: 'Frohnauer SC II',
    position: 'ST',
    jahr: '2010',
    status: 'Status: ?',
    avatar: <img alt="ms" src={MS} />,
    link: 'https://www.fupa.net/player/moritz-stoll-845270',
  },

  ];
  return (

  

<Container>
<Headline>
  Mannschaft
</Headline>
<Text>
 Der Spielplan der Saison 2021/2022 der Kreisliga A Staffel 1.
</Text>  
<br />
<br />
<PlayerContainer>
<Deets players={profiles}/> 
</PlayerContainer>
<br />
<Text>Trainerteam</Text>
<br />
<DeetsCoach coaches={profilesCoach}/>

</Container>
  );
};

export default ContentTeam;
