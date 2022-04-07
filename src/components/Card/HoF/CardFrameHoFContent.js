import CardTest from './CardFrameHoF';
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

  const DetailsHoF = ({ hofs }) => {
    return (
      <HorizontalContainer>
        
          {hofs.map((hof) => {
            const { saison, verein, position, legende, status, name, jahr, avatar1, avatar2, avatar3, link, description} = hof;

            
            return (
              
              <CardTest
                saison={saison}
                verein={verein}
                position={position}
                legende={legende}
                status={status}
                name={name}
                jahr={jahr}
                avatar1={avatar1}
                avatar2={avatar2}
                avatar3={avatar3}
                link={link}
                description={description}
              />
              
            )
          })}
          </HorizontalContainer>
      
    )
}

export default DetailsHoF;