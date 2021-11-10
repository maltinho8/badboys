import React from 'react';
import styled from 'styled-components';
import { Search } from '@styled-icons/bootstrap/Search';
import { PersonCircle } from '@styled-icons/bootstrap/PersonCircle';
import Burger from '../Burger/burger';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

  import Homepage from '../../Pages/LandingPage/LandingPage';
  import Spielplan from '../../Pages/Spielplan/spielplan';
  import Tabelle from '../../Pages/Tabelle/tabelle';
  import Team from '../../Pages/Team/team';

const Logo = styled.div`
    color: ${({ theme }) => theme.palette.text.light};
    font-size: 1.2rem;
    margin-left: 5rem;
    
    font-weight: 700;
    cursor: pointer;
  `;
  
  const Headline = styled.div`
    color: ${({ theme }) => theme.palette.text.light};
    font-size: 1.2rem;
    margin-left: 3rem;
    font-weight: 700;
    cursor: pointer;
    display: flex;
    @media screen and (max-width: 900px) {
      display:none;
      transition: ease all .5s;
    }
    
  `;
  
  
  const Text = styled.div`
    color: ${({ theme }) => theme.palette.text.light};
    font-size: 1rem;
    margin-left: 10rem;
    font-weight: 500;
    cursor: pointer;
    @media screen and (max-width: 900px) {
      display:none;
      transition: ease all .5s;
    }
  `;

  const IconButton = styled.div`
    background: transparent;
    color: #fff;
    margin-right: 1rem;
    cursor: pointer;
    display: flex;
    opacity: 0.8;
    
    @media screen and (max-width: 900px) {
      display:none;
      transition: ease all .5s;
    }
  `;
  
  const IconContainer = styled.div`
    margin-right: 2rem;
    display: flex;
    @media screen and (max-width: 900px) {
      display:none;
      transition: ease all .5s;
    }
  `;
  
  

  const Bar = styled.div`
    height: 4rem;
    width: 100%;
    box-shadow: 6px 6px 4px -1px rgba(0,0,0,0.3);
    display: flex;
    align-items: center;
    justify-content: space-between;
  `;

  
  const NavBar = () => {
    return (
        <Router>
        <div className="NavBar">
          
        <Bar>
      <Logo><i className="fas fa-user-ninja"></i></Logo>
            <Headline><Link to="/Home" style={{ textDecoration: 'none', color: 'white' }}>BadBoys</Link></Headline>
            <Text><Link to="/Team" style={{ textDecoration: 'none', color: 'white' }}>Team</Link></Text>
            <Text><Link to="/Tabelle" style={{ textDecoration: 'none', color: 'white' }}>Tabelle</Link></Text>
            <Text><Link to="/Spielplan" style={{ textDecoration: 'none', color: 'white' }}>Spielplan</Link></Text>
            
            <IconContainer>
              <IconButton>
                <Search size={20} />
              </IconButton>
              <IconButton>
                <PersonCircle size={20} />
              </IconButton>
            </IconContainer>
            
            </Bar>
            
            <Switch>
            <Route path="/Team">
              <Team />
            </Route>
            <Route path="/Tabelle">
              <Tabelle />
            </Route>
            <Route path="/Spielplan">
              <Spielplan />
            </Route>
            <Route path="/">
              <Homepage />
            </Route>
            <Route path="/">
              <Logo />
            </Route>

          </Switch>
            <Burger />
          
          

        </div>
      
      </Router>
    );
  };
  
  export default NavBar;