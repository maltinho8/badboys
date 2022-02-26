import CardFrameCoach from './CardFrameCoach';
import '../../PagesContent/ContentTeam/Index';
import styled from 'styled-components';
import {Fragment} from 'react';
const HorizontalContainer = styled.div`
    
    width: 100%;
    display: flex;
    
  `; 

const Break = styled.div`
    float:left;
    margin-right: 50px;
    margin-bottom: 65px;
    margin:0 auto;
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