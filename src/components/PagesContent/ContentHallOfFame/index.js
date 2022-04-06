import React from 'react';
import styled from 'styled-components';
import './index.css';
import DetailsPlayers from '../../Card/Players/CardFramePlayerContent';
import SG from '../../../assets/img/ProfileImages/globig.jpg';
import CH from '../../../assets/img/ProfileImages/claudius.jpg';
import XB from '../../../assets/img/ProfileImages/xaver.jpg';

const Container = styled.div`
  padding: 1rem;
  color: ${({theme}) => theme.palette.text.light};
  
`;

const Headline = styled.h2`

line-height: 1;
margin-bottom: 2rem;
color: white;
`;

const PlayerContainer = styled.div`
  @media screen and (max-width: 768px) {
    display: flex;
    justify-content: center;
  }
`;



const Text = styled.div`
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
`;

const ContentHallOfFame = () => {
  const profilesPlayers = [
    {
      name: 'Tobias Haby',
      saison: '2022/2023',
      verein: 'Frohnauer SC II',
      position: 'TW',
      jahr: '2017',
      status: 'Jura-Titan',
      avatar: <img alt="ch" src={SG} />,
      link: 'https://www.fupa.net/player/simon-globig-1444663',
    },
    { 
    name: 'Robin Kliesch',
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
      name: 'Robin Köster',
      saison: '2022/2023',
      verein: 'Frohnauer SC II',
      position: 'IV',
      jahr: '2012',
      status: 'Kobin Röster',
      avatar: <img alt="ch" src={CH} />,
      link: 'https://www.fupa.net/player/claudius-haensler-1665429',
    }
  ]

  return (
    <Container>
      <Headline>
        Hall of Fame
      </Headline>
      <Text>
     Blablahfggdfg gf erg zer uzfudfguer ezruerg zeewur werzeuw wuzeg wuegr.

      </Text>

<PlayerContainer>
<DetailsPlayers players={profilesPlayers}/> 
</PlayerContainer>




      </Container>





  );
};

export default ContentHallOfFame;
