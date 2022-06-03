import CardFrameCoach from './CardFrameCoach';
import '../../PagesContent/ContentTeam';
import styled from 'styled-components';

const HorizontalContainer = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    margin: auto;
    @media screen and (max-width: 768px) {
      flex-direction: column;
      align-content: center;
    }
    
  `; 

  const DetailsCoaches = ({ coaches }) => {
    return (

      <HorizontalContainer>
          {coaches.map((coach) => {
            const { saison, verein, position, legende, status, name, jahr, avatar, link} = coach;
            return (
              <CardFrameCoach
                key={coach.id}
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

export default DetailsCoaches;