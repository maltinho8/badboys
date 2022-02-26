import React from 'react';
import styled from 'styled-components';
import ContentNews from "../../PagesContent/ContentNews";

const ContentContainer = styled.div`
  width: 100%;
  margin: 2rem 0 0 4rem;
`;

const News = () => {
  return (

        <ContentContainer>
          <ContentNews/>
        </ContentContainer>

  );
}

export default News;
