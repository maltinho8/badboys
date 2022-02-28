import CardFrameCoach from './CardFrameCoach';
import '../../PagesContent/ContentTeam';
import styled from 'styled-components';

const HorizontalContainer = styled.div`
width: 100%;
display: flex;
flex-wrap: wrap;
    
  `; 

  const DeetsCoach = ({ coaches }) => {
    return (
      <HorizontalContainer>
        
          {coaches.map((coach) => {
            const { saison, verein, position, legende, status, name, jahr, avatar, link} = coach;
            
            return (
              
              <CardFrameCoach
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

export default DeetsCoach;