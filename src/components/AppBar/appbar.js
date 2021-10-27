import React from 'react';
import styled from 'styled-components';
import { Search } from '@styled-icons/bootstrap/Search';
import { PersonCircle } from '@styled-icons/bootstrap/PersonCircle';
import {Paypal} from '@styled-icons/boxicons-logos/Paypal';
import { Link } from 'react-router-dom';

const Bar = styled.div`
  height: 4rem;
  width: 100%;
  box-shadow: 6px 6px 4px -1px rgba(0,0,0,0.3);
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const HeadlineLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.palette.text.light};
  font-size: 1.2rem;
  margin-right: 5rem;
  font-weight: 700;
  cursor: pointer;
  @media screen and (max-width: 900px) {
    display:none;
    transition: ease all .5s;
  }
`;

const Logo = styled.div`
  color: ${({ theme }) => theme.palette.text.light};
  font-size: 1.2rem;
  margin-left: 5rem;
  margin-right: -8rem;
  font-weight: 700;
  cursor: pointer;
`;


const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.palette.text.light};
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  text-decoration: none;
  
  @media screen and (max-width: 900px) {
    display:none;
    transition: ease all .5s;
  }
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
      <Logo><i className = "fas fa-user-ninja" /></Logo>
      <HeadlineLink to="/" >BadBoys</HeadlineLink>
      <StyledLink to="/Team" >Team</StyledLink>
      <StyledLink to="/Tabelle" >Tabelle</StyledLink>
      <StyledLink to="/Spielplan">Spielplan</StyledLink>
      <StyledLink to="/news" >News</StyledLink>
      <IconContainer>
        <IconButton>
          <Search size={20} />
        </IconButton>
        <IconButton>
          <PersonCircle size={20} />
        </IconButton>
        <IconButton>
          <Paypal size = {20} />
        </IconButton>
      </IconContainer>


    </Bar>

  );
};

export default AppBar;
