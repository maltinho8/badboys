import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import './TimeLine2.css';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import { purple } from '@mui/material/colors';


const steps = [
 
  '2018 - Aufstieg in die Kreisliga B',
  '2019 - Aufstieg in die Kreisliga A',
  '2019 - Einzug ins Berliner Pokalhalbfinale',
  '2019 - Bangoura Cup Hamburg',
  '2022 - Einzug ins Berliner Pokalhalbfinale',
];

export default function Timeline2() {
  return (
    <Box sx={{ width: '100%' }}>
        
      <Stepper  alternativeLabel={true} orientation="horizontal">
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel 
             icon={<EmojiEventsIcon/>}
             style={{color: purple}}
             >{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      
    </Box>
  );
}