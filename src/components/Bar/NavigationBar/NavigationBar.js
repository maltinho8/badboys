import React, {useState} from 'react';
import styled from 'styled-components';
import { PersonCircle } from '@styled-icons/bootstrap/PersonCircle';
import Burger from '../Burger/Burger';
import fire from '../../../fire';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

import Homepage from '../../Pages/LandingPage/LandingPage';
import Spielplan from '../../Pages/Spielplan/Spielplan';
import Tabelle from '../../Pages/Tabelle/Tabelle';
import Team from '../../Pages/Team/Team';
import Login from '../../Authentification/Login';


  const LogoContainer = styled.div`
  color: ${({ theme }) => theme.palette.text.light};
  
`;

const TextContainer = styled.div`
  color: ${({ theme }) => theme.palette.text.light};
  
`;

const SuperContainer = styled.div`
  color: ${({ theme }) => theme.palette.text.light};
  display:flex;
  align-items: center;
  height: 100%;
  width: 100vw!important;
  
`;

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
  
  
  const Text = styled(Link)`
    color: ${({ theme }) => theme.palette.text.light};
    font-size: 1rem;
    margin-left: 10rem;
    font-weight: 600;
    cursor: pointer;
      a:hover {
        color: orange;
      
    };
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
   
    box-shadow: 6px 6px 4px -1px rgba(0,0,0,0.3);
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid darkorange;
    background-color: black;
    margin: 0;
    padding: 0;
    top: 0;
    left: 0;

    
    @media (max-width: 900px) {
      
    display:none;
    }
  `;

  
  const NavBar = () => {
    const [isLoggedIn, setIsLoggedIn] = useState (false)

    fire.auth().onAuthStateChanged((user) => {return user ? setIsLoggedIn(true) : setIsLoggedIn (false) })

    return (

        
        <Router>
        
          
        <Bar>
          <SuperContainer>

          
          <LogoContainer> 
          <Logo><Link to="/Home" style={{ textDecoration: 'none', color: 'white' }}><i className="fas fa-user-ninja"></i></Link></Logo>
            <Headline><Link to="/Home" style={{ textDecoration: 'none', color: 'white' }}>BadBoys</Link></Headline>
          </LogoContainer>

          <TextContainer>
            <Text to="/Team" style={{ textDecoration: 'none', color: 'white' }}>Team</Text>
            <Text to="/Tabelle" style={{ textDecoration: 'none', color: 'white' }}>Tabelle</Text>
            <Text to="/Spielplan" style={{ textDecoration: 'none', color: 'white' }}>Spielplan</Text>
            <Text to="/Spielplan" style={{ textDecoration: 'none', color: 'white' }}>News</Text>
            </TextContainer>
            </SuperContainer>
            
            <IconContainer>
              
              <IconButton>
                <Link to ="/Login" style={{ textDecoration: 'none', color: 'white' }}>
                <PersonCircle size={20}/>
                </Link> 
                
              </IconButton>
            </IconContainer>
            </Bar>
            
            {isLoggedIn ? (
              <div>
                 
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
              <Route path="/Login">
                <Login />
              </Route>
              <Route path="/">
                <Homepage />
              </Route>
              <Route path="/">
                <Logo />
              </Route>
            </Switch>
            </div>

            
            ) : (
              <Switch>
              
             
                 <Route path="/Login">
                <Login />
              </Route>
              <Route path="/">
                <Homepage />
              </Route>
              
              </Switch>
            )}
          
            <Burger />
          
          

       
      
      </Router>
    );
  };
  
  export default NavBar;