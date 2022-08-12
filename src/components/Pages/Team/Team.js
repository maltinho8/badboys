import React from "react";
import styled from "styled-components";
import ContentTeam from "../../PagesContent/ContentTeam/index";

const ContentContainer = styled.div`
  width: 100vwimportant!;
  
  padding: 6.2rem;
  @media screen and (max-width: 768px) {
    width: 85%;
  }
`;
const Team = () => {
  return (
    <ContentContainer>
      <ContentTeam />
    </ContentContainer>
  );
};

export default Team;
