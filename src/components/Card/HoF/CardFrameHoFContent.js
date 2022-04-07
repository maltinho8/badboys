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
            const { name, spitzname, position,  description, avatar1, avatar2, avatar3} = hof;

            
            return (
              
              <CardTest
                name={name}
                spitzname={spitzname}
                position={position}
                avatar1={avatar1}
                avatar2={avatar2}
                avatar3={avatar3}
                description={description}
              />
              
            )
          })}
          </HorizontalContainer>
      
    )
}

export default DetailsHoF;