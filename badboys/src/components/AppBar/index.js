import React from 'react';
import styled from 'styled-components';
import { Search } from '@styled-icons/bootstrap/Search';
import { PersonCircle } from '@styled-icons/bootstrap/PersonCircle';

const Bar = styled.div`
  height: 4rem;
  width: 100%;
  box-shadow: 6px 6px 4px -1px rgba(0,0,0,0.3);
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Headline = styled.div`
  color: ${({ theme }) => theme.palette.text.light};
  font-size: 1.2rem;
  margin-left: 3rem;
  font-weight: 700;
`;

const IconContainer = styled.div`
  margin-right: 3rem;
  display: flex;
`;

const IconButton = styled.div`
  background: transparent;
  color: #fff;
  margin-left: 1.5rem;
  cursor: pointer;
  opacity: 0.8;
`;

const AppBar = () => {
  return (
    <Bar>
      <Headline>BadBoys</Headline>
      <IconContainer>
        <IconButton>
          <Search size={20} />
        </IconButton>
        <IconButton>
          <PersonCircle size={20} />
        </IconButton>
      </IconContainer>
    </Bar>
  );
};

export default AppBar;
