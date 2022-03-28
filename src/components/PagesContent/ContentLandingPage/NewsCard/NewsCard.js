import React from 'react';
import styled from 'styled-components';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

const ContentContainer = styled.div`
margin-left: 1rem;
margin-right: 1rem;

@media screen and (max-width: 768px) {
  margin-left: 3rem;
  margin-right: 3rem;
  display: block;
 
}
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
          image="https://images.unsplash.com/photo-1614632537190-23e4146777db?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
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
        <Button size="small" color="primary">
          Zum Spiel
        </Button>
      </CardActions>
    </Card>

    
      </ContentContainer>
    </div>
  )
}

export default NewsCard