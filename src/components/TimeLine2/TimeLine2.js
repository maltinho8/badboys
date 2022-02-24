import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import { styled } from "@material-ui/styles";

const StyledStepLabel = styled(StepLabel)({
  "& .MuiStepLabel-label": {
    color: "white"
  }
});


const steps = [
 
  '2018 - Aufstieg in die Kreisliga B',
  '2019 - Aufstieg in die Kreisliga A',
  '2019 - Einzug ins Berliner Pokalhalbfinale',
  '2019 - Bangoura Cup Hamburg',
];

export default function Timeline2() {
  return (
    <Box sx={{ width: '100%' }}>
        
      <Stepper alternativeLabel={true} orientation="horizontal">
        {steps.map((label) => (
          <Step key={label}>
            <StyledStepLabel 
             icon={<EmojiEventsIcon/>}
             style={{color: "gold"}}
             >{label}</StyledStepLabel>
          </Step>
        ))}
      </Stepper>
      
    </Box>
  );
}