import React from 'react';
import styled from 'styled-components';
import Content from './RightNavigationBarContent';
import img from "../../../assets/img/fsc1.png";

const Ul = styled.div`
  @media (max-width: 900px) {
    width: 100vw!important;
    flex-flow: column nowrap;
    background-image: linear-gradient(rgba(0, 0, 0, 0.627),rgba(0, 0, 0, 0.8)) ,url(${img});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: flex;
    align-items: center;
    transition: transform 0.3s ease-in-out;
    z-index: 20;
  }
`;

const RightNav = ({closeMenu}) => {
  /* Nutzung der Methode closeMenu durch Übergabe in burger.js  */
  return (
    <Ul>
      < Content closeMenu={closeMenu}/>   
      {/* Übergabe der Methode closeMenu zur Komponente Content  */}   
    </Ul>
  )
}

export default RightNav;