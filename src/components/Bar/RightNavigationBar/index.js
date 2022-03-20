import React from 'react';
import styled from 'styled-components';
import Content from './RightNavigationBarContent';

const Ul = styled.div`
  @media (max-width: 900px) {
    width: 100vw!important;
    flex-flow: column nowrap;
    background-image: linear-gradient(
      125.26deg,
      rgba(0, 0, 0, 0.75) 14.32%,
      rgba(0, 0, 0, 0.75) 90.00%
    ),url('https://scontent-ber1-1.xx.fbcdn.net/v/t1.6435-9/118657807_3442834425773146_5322172505327115756_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=e3f864&_nc_ohc=n6Myo213e8cAX8Ygqoh&_nc_ht=scontent-ber1-1.xx&oh=00_AT81afUG9ltPWoUV1V38uDZ5ca3mty_O9kN5mzPRgpN0UA&oe=625AC6FB');
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