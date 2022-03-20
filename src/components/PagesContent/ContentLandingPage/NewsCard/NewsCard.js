import React from 'react';
import styled from 'styled-components';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

const HeadlineSmall = styled.h4`
  font-size: 2.5rem;
  line-height: 1;
  margin-bottom: 1.5rem;
  color: white;
  
  @media (max-width: 768px) { 
    text-align: center; 
  }

`;


const Text = styled.p`
  font-size: 0.9rem;
  color: white;
  
  @media screen and (max-width: 768px) {
    font-size: 1rem;
    text-align: center;
  }
`;

const ContentContainer = styled.div`
margin-left: 5rem;
margin-right: 5rem;

@media screen and (max-width: 768px) {
  margin-left: 3rem;
  margin-right: 3rem;
  display: block;
 
}
`;

const Boxes = styled.div`



overflow: hidden;
width: 100%;

box-shadow: 0px 12px 18px -6px rgba (0,0,0,0.3);
border-radius: 10px 10px 10px 10px;
object-fit: contain;
`;



const NewsCard = (props) => {
  return (
    <div>
      <br />
      <br />
        <ContentContainer>
      <Card sx={{ maxWidth: 315 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://images.unsplash.com/photo-1641135698530-8d919344c0e5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="success">
          Mehr
        </Button>
      </CardActions>
    </Card>

    
      </ContentContainer>
    </div>
  )
}

export default NewsCard