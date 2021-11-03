import React from 'react';
import { Search } from '@styled-icons/bootstrap/Search';
import { PersonCircle } from '@styled-icons/bootstrap/PersonCircle';
import theme, { GlobalStyle } from './Theme';
import styled, { ThemeProvider } from 'styled-components';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Homepage from './components/LandingPage/LandingPage';
import Spielplan from './components/Spielplan/spielplan';
import Tabelle from './components/Tabelle/tabelle';
import Team from './components/Team/team';

const Bar = styled.div`
  height: 4rem;
  width: 100%;
  box-shadow: 6px 6px 4px -1px rgba(0,0,0,0.3);
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Headline = styled.div`
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
  
  font-weight: 700;
  cursor: pointer;
`;


const Text = styled.div`
  color: ${({ theme }) => theme.palette.text.light};
  font-size: 1rem;
  
  font-weight: 500;
  cursor: pointer;
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

const App = () => {
  return (

    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
        <div className="App">
          <Bar>
            <Logo><i className="fas fa-user-ninja"></i></Logo>
            <Headline><Link to="/Home" style={{ textDecoration: 'none', color: 'white' }}>BadBoys</Link></Headline>
            <Text><Link to="/Team" style={{ textDecoration: 'none', color: 'white' }}>Team</Link></Text>
            <Text><Link to="/Tabelle" style={{ textDecoration: 'none', color: 'white' }}>Tabelle</Link></Text>
            <Text><Link to="/Spielplan" style={{ textDecoration: 'none', color: 'white' }}>Spielplan</Link></Text>
            <Text><Link to="/News" style={{ textDecoration: 'none', color: 'white' }}>News</Link></Text>
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

          </Switch>

        </div>
      </Router>
    </ThemeProvider>

  );
};

export default App;
