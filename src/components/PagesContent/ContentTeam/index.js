import React from 'react';
import styled from 'styled-components';
<<<<<<< HEAD
import CustomImageList from '../../Carousel/Carousel';
import ContentDefense from './ContentDefense';
=======
import Card from '../../Card/Tarani/index';
import CardObst from '../../Card/Obst/index';

>>>>>>> 63060fb455f7cb75cca13c028fa88c71a1c58b34


const Container = styled.div`
  padding: 1rem;
  width: 100%;
  color: ${({theme}) => theme.palette.text.light};
`;

const Headline = styled.h2`
  font-size: 5rem;
  line-height: 1;
  margin-bottom: 3rem;
`;

const Text = styled.div`
  font-size: 1.2rem;
`;

const SpaceHorizontalContainer = styled.div`
    display:flex;
    width: 100%;
    justify-content: space-between; 
    @media (max-width: 900px) {
      flex-wrap: wrap;
      align-items: center;
      display:flex;
      margin-bottom: 50px;
    }
    
  `; 

  const ButtonContainer = styled.div`
    display:flex;
    width: 60%;
    justify-content: space-between;
    margin-bottom: 50px;
    @media (max-width: 900px) {
      flex-wrap: wrap;
      align-items: center;
      display:flex;
      margin-bottom: 50px;
    }
    
  `; 

const ContentTeam = () => {
  return (
    <Container>
      <Headline>
        Speaker*innen
      </Headline>
      <Text>
        Auf dieser Seite werden die Speaker*innen des Climate Transformation Summit 2022 vorgestellt.
      </Text>
<<<<<<< HEAD
      < br />
      < br />
      <ContentDefense/>
=======

      < br />
      < br />
      

      <SpaceHorizontalContainer>
        <div className = "one"><Card/></div>
        <div className = "two"><CardObst/></div>
        <div className = "three"><Card/></div>
      </SpaceHorizontalContainer>
      < br />
      < br />
>>>>>>> 63060fb455f7cb75cca13c028fa88c71a1c58b34
      
    </Container>
    
  );
};

export default ContentTeam;
