import CardTest from './CardFramePlayer';
import '../../PagesContent/ContentTeam';
import styled from 'styled-components';

const HorizontalContainer = styled.div`
    
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    
    @media screen and (max-width: 768px) {
      flex-direction: column;
      align-content: center;
      
    }
  
  `; 

  const DetailsPlayers = ({ players }) => {
    return (
      <HorizontalContainer>
        
          {players.map((player) => {
            const { saison, verein, position, legende, status, name, jahr, avatar, link} = player;

            
            return (
              
              <CardTest
                key={player.id}
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

export default DetailsPlayers;