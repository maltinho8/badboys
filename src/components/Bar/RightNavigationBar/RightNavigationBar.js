import React from 'react';
import styled from 'styled-components';
import Content from './Content';

const Ul = styled.div`
  @media (max-width: 900px) {
    flex-flow: column nowrap;
    background: black;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: flex;
    align-items: center;
    transition: transform 0.3s ease-in-out;
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