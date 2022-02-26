import React, {useState}  from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavigationBar from '../Bar/NavigationBar/Index';
import fire from '../../fire';
import Homepage from '../Pages/LandingPage/LandingPage';
import Spielplan from '../Pages/Spielplan/Spielplan';
import Tabelle from '../Pages/Tabelle/Tabelle';
import News from '../Pages/News/News';
import Team from '../Pages/Team/Team';
import Login from '../Authentification/Login';
import HallOfFame from '../Pages/HallOfFame/HallOfFame';

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
        <Route path='/News' component={News} />
        <Route path='/HallOfFame' component={HallOfFame} />
        <Route path='/Login' component={Login} />
      </Switch>

      ) : (
        <Switch>
        
        <Route path="/Homepage">
          <Homepage />
        </Route>
           <Route path="/Login">
          <Login />
        </Route>
        
        
        </Switch>
      )}
  </Router>
   
   
    
  );
};

export default Routing;