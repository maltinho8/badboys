import * as React from "react";
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import Typography from '@mui/material/Typography';
import styled from 'styled-components';
import Paper from '@mui/material/Paper';
import { makeStyles } from '@mui/styles';

const Container = styled.div`
width: 100%; 
@media (max-width: 768px) { 
  margin: 0 auto; 
 }
`;

const useStyles = makeStyles({
  timeline: {
    transform: "rotate(90deg)"
  },
  timelineContentContainer: {
    textAlign: "left"
  },
  timelineContent: {
    display: "inline-block",
    transform: "rotate(-90deg)",
    textAlign: "center",
    minWidth: 50,
    
  },
 
  timelineIcon: {
    transform: "rotate(-90deg)"
  },

  timelineConnector: {
      opacity: 0
  }
});

const Seperator = () => {
  const classes = useStyles();
  return (
    <Container>
    <Timeline className={classes.timeline} align="alternate">
      
      <TimelineItem>
        <TimelineOppositeContent 
          sx={{ m: 'auto 0' }}
          variant="body2"
          color="white"
        >
          
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector className={classes.timelineConnector}/>
          <TimelineDot color="success" variant="outlined">
            <SportsSoccerIcon className={classes.timelineIcon} style={{fill: "white"}} />
          </TimelineDot>
          <TimelineConnector className={classes.timelineConnector}/>
        </TimelineSeparator>
        <TimelineContent sx={{ m: 'auto 0' }} color="white" >
        
            <Typography className={classes.timelineContent}></Typography>
          
        </TimelineContent>
      </TimelineItem>

      
    </Timeline>
    </Container>
  );
};

export default Seperator;

