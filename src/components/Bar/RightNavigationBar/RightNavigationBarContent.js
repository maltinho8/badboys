import React from 'react';
import styled from "styled-components";
import {Link} from "react-router-dom";

const Text = styled(Link)`
    color: ${({ theme }) => theme.palette.text.light};
    font-size: 1rem;
    margin-left: 10rem;
    font-weight: 500;
    cursor: pointer;
    @media screen and (max-width: 900px) {
      margin: 0;
      transition: ease all .5s;
      margin-top: 50px;
      font-size: 1.5rem;
      &:hover {
        color: #fbbe01;
      }
     
    }
  `;

  const Logo = styled.div`
  font-size: 1.2rem;
  margin-left: 5rem;
  font-weight: 700;
  cursor: pointer;
  @media screen and (max-width: 900px) {
    margin: 0;
    transition: ease all .5s;
    margin-top: 14px;
    font-size: 2rem;
    
    
    
  }
`;

const Container = styled.div`
@media (max-width: 900px) {
display: flex;
flex-direction: column;
align-items: center;
width: 100%;
}
`

/* Nutzung der Methode closeMenu durch Übergabe in rightnav.js  */
const Content = ({closeMenu}) => {
    
    return(

        <Container>
          <br/>
        {/* durch onClick - closeMenu wird genutzt, um beim Klicken des Links das Menü zu schließen  */}
        <Logo><Link onClick={closeMenu} to="/Homepage" style={{ textDecoration: 'none', color: 'orange' }}><i className="fas fa-user-ninja"></i></Link></Logo>
        <Text onClick={closeMenu} to="/Team" style={{ textDecoration: 'none', color: 'white' }}>Team</Text>
        <Text onClick={closeMenu} to="/Tabelle" style={{ textDecoration: 'none', color: 'white' }}>Tabelle</Text>
        <Text onClick={closeMenu} to="/Spielplan" style={{ textDecoration: 'none', color: 'white' }}>Spielplan</Text>
        <Text onClick={closeMenu} to="/News" style={{ textDecoration: 'none', color: 'white' }}>News</Text>
        <Text onClick={closeMenu} to="/HallOfFame" style={{ textDecoration: 'none', color: 'white' }}>Hall of Fame</Text>
        </Container>


    );
};

export default Content;