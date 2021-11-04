import React from 'react';
import styled from 'styled-components';


const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;

  li {
    display: none
  }
  
  @media (max-width: 900px) {
    flex-flow: column nowrap;
    background-color: #1E2426;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  
    
    transition: transform 0.3s ease-in-out;

    
  }
`;

const RightNav = ({open}) => {
  return (
    <Ul open={open}>
     
          
            
           
    </Ul>
  )
}

export default RightNav