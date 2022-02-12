import React from 'react';
import Deets from '../../Card/Deets';
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

const ContentTeam = () => {
  const profiles = [
    {
      name: 'Simon Globig',
      saison: '2022/2023',
      verein: 'Frohnauer SC II',
      position: 'TW',
      jahr: '2017',
      status: 'Status: Rookie',
      avatar: <img alt="ch" src={SG} />,
    },
    { 
    name: 'Xaver Bunzel',
    saison: '2022/2023',
    verein: 'Frohnauer SC II',
    position: 'IV',
    jahr: '2009',
    status: 'Status: Twistolero',
    avatar: <img alt="ch" src={XB} />,
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
    },

    {
      id: '20',
      name: 'Paul Conradt',
      saison: '2022/2023',
      verein: 'Frohnauer SC II',
      position: 'ST',
      jahr: '2010',
      status: 'Status: ?',
      avatar: <img alt="pc" src={PC} />,
    },
  {
    id: 'e21',
    name: 'Philipp Renke ',
    saison: '2022/2023',
    verein: 'Frohnauer SC II',
    position: 'ST',
    jahr: '2010',
    status: 'Status: ?',
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
  },

  ];
  return (

    <Grid container>

      
      <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
        
      <Deets info={profiles}/> 
      
      </Grid>
      </Grid>
 
  );
};

export default ContentTeam;
