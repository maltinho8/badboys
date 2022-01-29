import React from 'react';
import styled from 'styled-components';
import CardTest from '../../Card/CardTest';

import Deets from '../../Card/Deets';

import Grid from "@material-ui/core/Grid";




const Headline = styled.h2`
  font-size: 5rem;
  line-height: 1;
  margin-bottom: 3rem;
  color: white;
`;

const Text = styled.div`
  font-size: 1.2rem;
  color: white;
`;



const ContentTeam = () => {
  const profiles = [
    {
      id: '1',
      name: 'Simon Globig',
      saison: '2022/2023',
      verein: 'Frohnauer SC II',
      position: 'TW',
      jahr: '2017',
      status: 'Status: Rookie',
      avatar: 'SG',
    },
    { id: '2',
    name: 'Xaver Bunzel',
    saison: '2022/2023',
    verein: 'Frohnauer SC II',
    position: 'IV',
    jahr: '2009',
    status: 'Status: Twistolero',
    avatar: 'XB',
  },
    {
      id: '3',
      name: 'Claudius Haensler',
      saison: '2022/2023',
      verein: 'Frohnauer SC II',
      position: 'IV',
      jahr: '2004',
      status: 'Status: Aggressor',
      avatar: 'CH',
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
      avatar: 'JM',
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
    },

    {
      id: '9',
      name: 'Marlon Merten',
      saison: '2022/2023',
      verein: 'Frohnauer SC II',
      position: 'ZDM',
      jahr: '2021',
      status: 'Status: Stabil',
    },

    {
      id: '10',
      name: 'Jakob von Holst',
      saison: '2022/2023',
      verein: 'Frohnauer SC II',
      position: 'ZDM',
      jahr: '2021',
      status: 'Status: ?',
    },

    {
      id: '11',
      name: 'Younes Badi',
      saison: '2022/2023',
      verein: 'Frohnauer SC II',
      position: 'ZDM',
      jahr: '2005',
      status: 'Status: International',
    },

    {
      id: '12',
      name: 'Younes Badi',
      saison: '2022/2023',
      verein: 'Frohnauer SC II',
      position: 'ZDM',
      jahr: '2005',
      status: 'Status: ?',
    },

    {
      id: '13',
      name: 'Matti Liebermann',
      saison: '2022/2023',
      verein: 'Frohnauer SC II',
      position: 'RF/LF',
      jahr: '2005',
      status: 'Status: ?',
    },

    {
      id: '14',
      name: 'Steven Kaßburg',
      saison: '2022/2023',
      verein: 'Frohnauer SC II',
      position: 'RF/LF',
      jahr: '2010',
      status: 'Status: ?',
    },

    {
      id: '15',
      name: 'Max Wilk',
      saison: '2022/2023',
      verein: 'Frohnauer SC II',
      position: 'RF/LF',
      jahr: '2010',
      status: 'Status: ?',
    },

    {
      id: '16',
      name: 'Joao Dos Santos',
      saison: '2022/2023',
      verein: 'Frohnauer SC II',
      position: 'RF/LF',
      jahr: '2010',
      status: 'Status: ?',
    },

    {
      id: '17',
      name: 'Luca Kluge',
      saison: '2022/2023',
      verein: 'Frohnauer SC II',
      position: 'ZOM',
      jahr: '2010',
      status: 'Status: ?',
    },

    {
      id: '18',
      name: 'Justus Lemgau',
      saison: '2022/2023',
      verein: 'Frohnauer SC II',
      position: 'ZOM',
      jahr: '2010',
      status: 'Status: ?',
    },

    {
      id: '19',
      name: 'Victorio Herz',
      saison: '2022/2023',
      verein: 'Frohnauer SC II',
      position: 'ZOM/RF',
      jahr: '2010',
      status: 'Status: ?',
    },

    {
      id: '20',
      name: 'Paul Conradt',
      saison: '2022/2023',
      verein: 'Frohnauer SC II',
      position: 'ZOM/ST',
      jahr: '2010',
      status: 'Status: ?',
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
  },

  ];
  return (

    <Grid container spacing={2}>
      <Grid item lg={12}>
    
      <Headline>
        Mannschaft Frohnauer SC II.
      </Headline>
      <Text>
        Kader der aktuellen BadBoys für die Saison 2021/2022
      </Text>
      <br />
      
      </Grid>
      
      <Grid item lg={12}>
        
      <Deets info={profiles}/> 
      
      </Grid>
      </Grid>
 
  );
};

export default ContentTeam;
