import CardTest from './CardTest';
import '../PagesContent/ContentTeam/index';
import styled from 'styled-components';

const HorizontalContainer = styled.div`
    
    width: 100%;
    justify-content: space-between;
    
  `; 

const First = styled.div`
    float:left;
    margin-right: 50px;
    margin-bottom: 25px;
    margin-auto;
  `; 
  const Second = styled.div`
    float:left;
    margin-right: 50px;
    margin-bottom: 25px;
    margin-auto;
  `; 
  const Third = styled.div`
    float:left;
    margin-right: 50px;
    margin-bottom: 25px;
    margin-auto;
  `; 
  const Fourth = styled.div`
    float:left;
    margin-right: 50px;
    margin-bottom: 25px;
    margin-auto;
  `; 


const Deets = (props) => {
    return (
        <div>
      
      <HorizontalContainer>
      <First>
      <CardTest
      saison = {props.info[0].saison} 
      verein = {props.info[0].verein} 
      position={props.info[0].position}
      legende={props.info[0].legende}
      status={props.info[0].status}
      name={props.info[0].name}
      jahr={props.info[0].jahr}
      avatar={props.info[0].avatar}>
      </CardTest>
      </First>
      
      <Second>
      <CardTest
      saison = {props.info[1].saison} 
      verein = {props.info[1].verein} 
      position={props.info[1].position}
      legende={props.info[1].legende}
      status={props.info[1].status}
      name={props.info[1].name}
      jahr={props.info[1].jahr}>
      </CardTest>
      </Second>
      <Third>
      <CardTest
      saison = {props.info[2].saison} 
      verein = {props.info[2].verein} 
      position={props.info[2].position}
      legende={props.info[2].legende}
      status={props.info[2].status}
      name={props.info[2].name}
      jahr={props.info[2].jahr}>
      </CardTest>
      </Third>
      <Fourth>
      <CardTest
      saison = {props.info[3].saison} 
      verein = {props.info[3].verein} 
      position={props.info[3].position}
      legende={props.info[3].legende}
      status={props.info[3].status}
      name={props.info[3].name}
      jahr={props.info[3].jahr}>
      </CardTest>
      </Fourth>
      <Fourth>
      <CardTest
      saison = {props.info[4].saison} 
      verein = {props.info[4].verein} 
      position={props.info[4].position}
      legende={props.info[4].legende}
      status={props.info[4].status}
      name={props.info[4].name}
      jahr={props.info[4].jahr}>
      </CardTest>
      </Fourth>
      <Fourth>
      <CardTest
      saison = {props.info[5].saison} 
      verein = {props.info[5].verein} 
      position={props.info[5].position}
      legende={props.info[5].legende}
      status={props.info[5].status}
      name={props.info[5].name}
      jahr={props.info[5].jahr}>
      </CardTest>
      </Fourth>
      <Fourth>
      <CardTest
      saison = {props.info[6].saison} 
      verein = {props.info[6].verein} 
      position={props.info[6].position}
      legende={props.info[6].legende}
      status={props.info[6].status}
      name={props.info[6].name}
      jahr={props.info[6].jahr}>
      </CardTest>
      </Fourth>
      <Fourth>
      <CardTest
      saison = {props.info[7].saison} 
      verein = {props.info[7].verein} 
      position={props.info[7].position}
      legende={props.info[7].legende}
      status={props.info[7].status}
      name={props.info[7].name}
      jahr={props.info[7].jahr}>
      </CardTest>
      </Fourth>
      <Fourth>
      <CardTest
      saison = {props.info[8].saison} 
      verein = {props.info[8].verein} 
      position={props.info[8].position}
      legende={props.info[8].legende}
      status={props.info[8].status}
      name={props.info[8].name}
      jahr={props.info[8].jahr}>
      </CardTest>
      </Fourth>
      <Fourth>
      <CardTest
      saison = {props.info[9].saison} 
      verein = {props.info[9].verein} 
      position={props.info[9].position}
      legende={props.info[9].legende}
      status={props.info[9].status}
      name={props.info[9].name}
      jahr={props.info[9].jahr}>
      </CardTest>
      </Fourth>
      <Fourth>
      <CardTest
      saison = {props.info[10].saison} 
      verein = {props.info[10].verein} 
      position={props.info[10].position}
      legende={props.info[10].legende}
      status={props.info[10].status}
      name={props.info[10].name}
      jahr={props.info[10].jahr}>
      </CardTest>
      </Fourth>
      <Fourth>
      <CardTest
      saison = {props.info[11].saison} 
      verein = {props.info[11].verein} 
      position={props.info[11].position}
      legende={props.info[11].legende}
      status={props.info[11].status}
      name={props.info[11].name}
      jahr={props.info[11].jahr}>
      </CardTest>
      </Fourth>
      <Fourth>
      <CardTest
      saison = {props.info[12].saison} 
      verein = {props.info[12].verein} 
      position={props.info[12].position}
      legende={props.info[12].legende}
      status={props.info[12].status}
      name={props.info[12].name}
      jahr={props.info[12].jahr}>
      </CardTest>
      </Fourth>
      <Fourth>
      <CardTest
      saison = {props.info[13].saison} 
      verein = {props.info[13].verein} 
      position={props.info[13].position}
      legende={props.info[13].legende}
      status={props.info[13].status}
      name={props.info[13].name}
      jahr={props.info[13].jahr}>
      </CardTest>
      </Fourth>
      <Fourth>
      <CardTest
      saison = {props.info[14].saison} 
      verein = {props.info[14].verein} 
      position={props.info[14].position}
      legende={props.info[14].legende}
      status={props.info[14].status}
      name={props.info[14].name}
      jahr={props.info[14].jahr}>
      </CardTest>
      </Fourth>
      <Fourth>
      <CardTest
      saison = {props.info[15].saison} 
      verein = {props.info[15].verein} 
      position={props.info[15].position}
      legende={props.info[15].legende}
      status={props.info[15].status}
      name={props.info[15].name}
      jahr={props.info[15].jahr}>
      </CardTest>
      </Fourth>
      <Fourth>
      <CardTest
      saison = {props.info[16].saison} 
      verein = {props.info[16].verein} 
      position={props.info[16].position}
      legende={props.info[16].legende}
      status={props.info[16].status}
      name={props.info[16].name}
      jahr={props.info[16].jahr}>
      </CardTest>
      </Fourth>
      <Fourth>
      <CardTest
      saison = {props.info[17].saison} 
      verein = {props.info[17].verein} 
      position={props.info[17].position}
      legende={props.info[17].legende}
      status={props.info[17].status}
      name={props.info[17].name}
      jahr={props.info[17].jahr}>
      </CardTest>
      </Fourth>
      <Fourth>
      <CardTest
      saison = {props.info[18].saison} 
      verein = {props.info[18].verein} 
      position={props.info[18].position}
      legende={props.info[18].legende}
      status={props.info[18].status}
      name={props.info[18].name}
      jahr={props.info[18].jahr}>
      </CardTest>
      </Fourth>
      <Fourth>
      <CardTest
      saison = {props.info[19].saison} 
      verein = {props.info[19].verein} 
      position={props.info[19].position}
      legende={props.info[19].legende}
      status={props.info[19].status}
      name={props.info[19].name}
      jahr={props.info[19].jahr}>
      </CardTest>
      </Fourth>
      <Fourth>
      <CardTest
      saison = {props.info[20].saison} 
      verein = {props.info[20].verein} 
      position={props.info[20].position}
      legende={props.info[20].legende}
      status={props.info[20].status}
      name={props.info[20].name}
      jahr={props.info[20].jahr}>
      </CardTest>
      </Fourth>
      <Fourth>
      <CardTest
      saison = {props.info[21].saison} 
      verein = {props.info[21].verein} 
      position={props.info[21].position}
      legende={props.info[21].legende}
      status={props.info[21].status}
      name={props.info[21].name}
      jahr={props.info[21].jahr}>
      </CardTest>
      </Fourth>
     
      </HorizontalContainer>
      
     
      
      </div>
    )
}

export default Deets;