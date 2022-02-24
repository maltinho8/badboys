import CardFrameCoach from './CardFrameCoach';
import '../../PagesContent/ContentTeam/Index';
import styled from 'styled-components';

const HorizontalContainer = styled.div`
    
    width: 100%;
    justify-content: space-between;
    
  `; 

const Break = styled.div`
    float:left;
    margin-right: 50px;
    margin-bottom: 65px;
    margin:0 auto;
  `; 



const DeetsCoach = (props) => {
    return (
        <div>
      
      <HorizontalContainer>
      <Break>
      <CardFrameCoach
      saison = {props.info[0].saison} 
      verein = {props.info[0].verein} 
      position={props.info[0].position}
      legende={props.info[0].legende}
      status={props.info[0].status}
      name={props.info[0].name}
      jahr={props.info[0].jahr}
      avatar={props.info[0].avatar}
      link={props.info[0].link}>
      </CardFrameCoach>
      </Break>
      
      <Break>
      <CardFrameCoach
      saison = {props.info[1].saison} 
      verein = {props.info[1].verein} 
      position={props.info[1].position}
      legende={props.info[1].legende}
      status={props.info[1].status}
      name={props.info[1].name}
      jahr={props.info[1].jahr}
      avatar={props.info[1].avatar}
      link={props.info[1].link}>
      </CardFrameCoach>
      </Break>
      
     
      </HorizontalContainer>
      
     
      
      </div>
    )
}

export default DeetsCoach;