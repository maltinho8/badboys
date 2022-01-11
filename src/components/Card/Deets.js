import CardTest from './CardTest';
import '../PagesContent/ContentTeam/ContentDefense';

const Deets = (props) => {
    return (
        <div>
      <div>
      <CardTest
      saison = {props.info[0].saison} 
      verein = {props.info[0].verein} 
      position={props.info[0].position}
      legende={props.info[0].legende}
      status={props.info[0].status}
      name={props.info[0].name}
      jahr={props.info[0].jahr}>
      </CardTest>

      <CardTest
      saison = {props.info[1].saison} 
      verein = {props.info[1].verein} 
      position={props.info[1].position}
      legende={props.info[1].legende}
      status={props.info[1].status}
      name={props.info[1].name}
      jahr={props.info[1].jahr}>
      </CardTest>

      <CardTest
      saison = {props.info[2].saison} 
      verein = {props.info[2].verein} 
      position={props.info[2].position}
      legende={props.info[2].legende}
      status={props.info[2].status}
      name={props.info[2].name}
      jahr={props.info[2].jahr}>
      </CardTest>
     

     
     
      </div>
      </div>
    )
}

export default Deets;