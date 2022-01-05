import CardDetails from './CardDetails';
import '../PagesContent/ContentTeam/ContentDefense';

const Deets = (props) => {
    return (
        <div>
      <div>
      <CardDetails
      saison = {props.info[0].saison} 
      verein = {props.info[0].verein} 
      position={props.info[0].position}
      legende={props.info[0].legende}
      jahr={props.info[0].jahr}>
      </CardDetails>

      <CardDetails
      saison = {props.info[1].saison} 
      verein = {props.info[1].verein} 
      position={props.info[1].position}
      legende={props.info[1].legende}
      jahr={props.info[1].jahr}>
      </CardDetails>
     
      </div>
      </div>
    )
}

export default Deets;