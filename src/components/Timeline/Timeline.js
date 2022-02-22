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
import Seperator from './Seperator';

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
  }
});

const TimeLine = () => {
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
          2022
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="success" variant="outlined">
            <SportsSoccerIcon className={classes.timelineIcon} style={{fill: "white"}} />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ m: 'auto 0' }} color="white" >
        
            <Typography className={classes.timelineContent}>Berliner Pokalhalbfinale</Typography>
          
        </TimelineContent>
      </TimelineItem>
      <Seperator />
      <Seperator />
      

     


      <TimelineItem>
        <TimelineOppositeContent className={classes.timelineOppositeContent}
          sx={{ m: 'auto 0' }}
          align="right"
          variant="body2"
          color="white"
        >
          2019
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="success" variant="outlined">
            <SportsSoccerIcon className={classes.timelineIcon} style={{fill: "white"}}/>
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ m: 'auto 0' }} color="white">
          <Typography className={classes.timelineContent}>BangouraCup Hamburg </Typography>
        </TimelineContent>
      </TimelineItem>
      <Seperator />
      <Seperator />
      <TimelineItem>
        <TimelineOppositeContent className={classes.timelineOppositeContent}
          sx={{ m: 'auto 0' }}
          align="right"
          variant="body2"
          color="white"
        >
          2019
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="success" variant="outlined">
            <EmojiEventsIcon className={classes.timelineIcon} style={{fill: "white"}}/>
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ m: 'auto 0' }} color="white">
          <Typography>Berliner Pokalhalbfinale</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent className={classes.timelineOppositeContent}
          sx={{ m: 'auto 0' }}
          align="right"
          variant="body2"
          color="white"
        >
          2019
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="success" variant="outlined">
            <EmojiEventsIcon className={classes.timelineIcon} style={{fill: "white"}}/>
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ m: 'auto 0' }} color="white">
          <Typography>Bangoura Cup Hamburg 1. Platz</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent className={classes.timelineOppositeContent}
          sx={{ m: 'auto 0' }}
          align="right"
          variant="body2"
          color="white"
        >
          2022
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="success" variant="outlined">
            <EmojiEventsIcon className={classes.timelineIcon}style={{fill: "white"}}/>
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ m: 'auto 0' }} color="white">
          <Typography>Berliner Pokalhalbfinale</Typography>
        </TimelineContent>
      </TimelineItem>
      
    </Timeline>
    </Container>
  );
};

export default TimeLine;

