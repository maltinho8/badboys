import React from 'react';
import styled from 'styled-components';
import ContentNews from "../../PagesContent/ContentNews";

const ContentContainer = styled.div`
  width: 80%;
  margin: 2rem 0 0 2rem;
  @media screen and (max-width: 768px) {
    width: 85%;
   
  }
`;

const News = () => {
  return (

        <ContentContainer>
          <ContentNews/>
        </ContentContainer>

  );
}

export default News;
