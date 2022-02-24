import React from "react";
import styled from 'styled-components';
import './FootballField.css';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import Paul from '../../assets/img/ProfileImages/paul.jpg';

const FieldContainer = styled.div`
  width: 100%;
  border: 1px solid white;
`;

const HtmlTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: '#f5f5f9',
    color: 'rgba(0, 0, 0, 0.87)',
    maxWidth: 220,
    
    border: '1px solid #dadde9',
  },
}));

const Field = () => (
  
      <FieldContainer>
    <center>
<div className="wrapper">
<div className="campo">
     <div className="semi1"></div>
     <div className="semi2"></div>
     <div className="divisoria"></div>
     <div className="interior"></div>
     <div className="penalty"></div> 
     <HtmlTooltip
        title={
          <React.Fragment>
            
            <Typography color="inherit">Tooltip with HTML</Typography>
            <img alt="paul" src={Paul}></img>
            <em>{"And here's"}</em> <b>{'some'}</b> <u>{'amazing content'}</u>.{' '}
            {"It's very engaging. Right?"}
          </React.Fragment>
        }
      >
        <div className="gk"></div>
      </HtmlTooltip>



     
     <div className="cb1"></div>
     <div className="cb2"></div>
     <div className="lb"></div>
     <div className="rb"></div>
     <div className="lwb"></div>
     <div className="dm"></div>
     <div className="rwb"></div>
     <div className="lm"></div>
     <div className="cm"></div>
     <div className="rm"></div>
     <div className="amr"></div>
     <div className="am"></div>
     <div className="aml"></div>
     <div className="wl"></div>
     <div className="cf"></div>
     <div className="wr"></div>
     <div className="st"></div>
  </div>
 </div>
</center>
</FieldContainer>
    

  
    
);

export default Field;