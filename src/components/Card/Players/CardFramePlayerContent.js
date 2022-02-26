import CardTest from './CardFramePlayer';
import '../../PagesContent/ContentTeam';
import styled from 'styled-components';

const HorizontalContainer = styled.div`
    
    width: 100%;
    display: flex;
  `; 

  const DeetsPlayer = ({ players }) => {
    return (
      <HorizontalContainer>
        
          {players.map((player) => {
            const { saison, verein, position, legende, status, name, jahr, avatar, link} = player;
            
            return (
              
              <CardTest
                saison={saison}
                verein={verein}
                position={position}
                legende={legende}
                status={status}
                name={name}
                jahr={jahr}
                avatar={avatar}
                link={link}
              />
              
            )
          })}
          </HorizontalContainer>
      
    )
}

export default DeetsPlayer;