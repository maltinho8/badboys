import React from "react";
import styled from "styled-components";
import Burger from "../Burger";
import { NavLink as Link } from "react-router-dom";


 const Nav = styled.nav`
  background: white;
  height: 110px;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((100vw - 1000px) / 2);
  z-index: 999;
  position: fixed;
  top: 0;
  right: 0;
  left:0;
  bottom: 0;
  border-bottom: 0.1px solid black;
  @media screen and (max-width: 768px) {
    margin-bottom: 0rem;
  }
`;

const NavLink = styled(Link)`
  color: black;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  &:active {
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
  color: black;
  outline: none;
  border: 1px solid black;
  opacity: 0.7;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  /* Second Nav */
  margin-left: 24px;
  &:hover {
    transition: all 0.2s ease-in-out;
    border: 1px solid black;
    opacity: 1;
  }
`;

const NavBar = () => {
  return (
    <>
      <Nav>
        <NavLink to="/Homepage">
          <h3>FSC II</h3>
        </NavLink>
        <Burger />
        <NavMenu>
          <NavLink to="/Team">Team</NavLink>
          <NavLink to="/Tabelle">Tabelle</NavLink>
          <NavLink to="/Spielplan">Spielplan</NavLink>
          <NavLink to="/HallOfFame">Hall of Fame</NavLink>
        </NavMenu>
        <NavBtn>
          <NavBtnLink
            to={{ pathname: "https://www.paypal.me/freddidunkel" }}
            target="_blank"
          >
            Support
          </NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default NavBar;
