import React, {useState}  from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavigationBar from '../Bar/NavigationBar/Index';
import fire from '../../fire';
import Homepage from '../Pages/LandingPage/LandingPage';
import Spielplan from '../Pages/Spielplan/Spielplan';
import Tabelle from '../Pages/Tabelle/Tabelle';
import Team from '../Pages/Team/Team';
import Login from '../Authentification/Login'

const Routing = () => {
    const [isLoggedIn, setIsLoggedIn] = useState (false)

    fire.auth().onAuthStateChanged((user) => {return user ? setIsLoggedIn(true) : setIsLoggedIn (false) })


  return (
    <Router>
    <NavigationBar />
    {isLoggedIn ? (
    <Switch>
        <Route path='/Homepage' exact component={Homepage} />
        <Route path='/Team' component={Team} />
        <Route path='/Tabelle' component={Tabelle} />
        <Route path='/Spielplan' component={Spielplan} />
        <Route path='/Login' component={Login} />
      </Switch>

      ) : (
        <Switch>
        
       
           <Route path="/Login">
          <Login />
        </Route>
        <Route path="/Homepage">
          <Homepage />
        </Route>
        
        </Switch>
      )}
  </Router>
   
   
    
  );
};

export default Routing;