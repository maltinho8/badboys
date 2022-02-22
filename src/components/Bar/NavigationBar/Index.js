import React from 'react';
import styled from 'styled-components';
import Burger from '../Burger/Index';
import {NavLink as Link} from "react-router-dom";
import Logo from '../../../assets/img/logo_small.png';

 const Nav = styled.nav`
  background: #000;
  height: 60px;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((100vw - 1000px) / 2);
  z-index: 10;
  

  
  
`;

const NavLink = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  &.active {
    color: orange;
    font-weight: bold;
  }
`;

const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;
  /* Second Nav */
  /* margin-right: 24px; */
  /* Third Nav */
  /* width: 100vw;
  white-space: nowrap; */
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;
  /* Third Nav */
  /* justify-content: flex-end;
  width: 100vw; */
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const NavBtnLink = styled(Link)`
  border-radius: 4px;
  
  padding: 10px 22px;
  color: orange;
  outline: none;
  border: 1px solid #256ce1;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  /* Second Nav */
  margin-left: 24px;
  &:hover {
    transition: all 0.2s ease-in-out;
    border: 1px solid lightblue;
    opacity: 0.8;
    color: orange;
  }
`;
  
  const NavBar = () => {

    return (        
        <>
      <Nav>
        <NavLink to='/Homepage'>
          
        <i class="fas fa-user-ninja fa-xl"></i>
        </NavLink>
        <Burger />
        <NavMenu>
          <NavLink to='/Team' activeStyle>
            Team
          </NavLink>
          <NavLink to='/Tabelle' activeStyle>
            Tabelle
          </NavLink>
          <NavLink to='/Spielplan' activeStyle>
            Spielplan
          </NavLink>
          <NavLink to='/News' activeStyle>
            News
          </NavLink>
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/Login'>Konto</NavBtnLink>
        </NavBtn>
      </Nav>
      
    </>

    );
  };
  
  export default NavBar;