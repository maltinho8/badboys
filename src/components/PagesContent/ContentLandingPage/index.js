import React from 'react';
import styled from 'styled-components';
import Button from '@mui/material/Button';
import {Link} from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import { HeadlineDrawing } from "../../HeadlineDrawing/Index";
import CircleChart from '../../HeadlineDrawing/CircleChart';

const Container = styled.div`
  width: 100%;
  display:flex;
`;

const Headline = styled.h3`
  font-size: 5rem;
  line-height: 1;
  margin-bottom: 3rem;
  color: white;
`;

const HeadlineSmall = styled.h4`
  font-size: 2.5rem;
  line-height: 1;
  margin-bottom: 3rem;
  color: white;
  
`;

const Text = styled.div`
  font-size: 1.2rem;
  color: white;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: start;
`;

const HeadlineContainer = styled.div`
 
`;

const ContentLandingPage = () => {
  return (

    <Grid container spacing={2} >
      <Grid item lg={12} >
      <Headline>
        Bad Boys
      </Headline>
      <Text>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
      </Text>
      <br />
      
      <ButtonContainer>
      <Link to="/Team" style={{ textDecoration: 'none' }}>
      <Button variant="outlined" href="#outlined-buttons">
              Mannschaft
      </Button></Link>&nbsp;&nbsp;
      <Link to="/Tabelle" style={{ textDecoration: 'none' }}>
      <Button variant="outlined" href="#outlined-buttons">
              Tabelle
      </Button>
      </Link>
      </ButtonContainer>
      </Grid>
      
      <br />
      <br />
      <br />
      <Grid item lg={9}>
        
      <HeadlineSmall>
Lorem ipsum dolor sit amet.
</HeadlineSmall>
      <Text>
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
      </Text>
      
      </Grid>
      <Grid item lg={3}>
      
      <HeadlineDrawing/>
      
      </Grid>
      <Grid item xl={12} >
        
      <HeadlineSmall>
Erfolge seit der Gründung:
</HeadlineSmall>
      <Text>
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
      </Text>
      
      </Grid>

      <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
      <CircleChart/>
      </Grid>
      
      </Grid>
      

  );
};

export default ContentLandingPage;
