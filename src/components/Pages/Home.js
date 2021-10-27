import React from 'react';
import {HeadlineDrawing} from "../HeadlineDrawing";
import ContentLandingPage from "../ContentLandingPage";
import styled from "styled-components";

const BallContainer = styled.div`
  position: absolute;
  top: 6rem;
  right: 8rem;
`;

const ContentContainer = styled.div`
  width: 50%;
  margin: 2rem 0 0 4rem;
`;

const Home = () => {
  return (
    <div>
      <BallContainer>
        <HeadlineDrawing size={500}/>
      </BallContainer>
      <ContentContainer>
        <ContentLandingPage/>
      </ContentContainer>
    </div>
  );
};

export default Home;