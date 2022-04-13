import React, {useState}  from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import NavigationBar from '../Bar/NavigationBar/index.js';
import fire from '../../fire';
import Homepage from '../Pages/LandingPage/LandingPage';
import Spielplan from '../Pages/Spielplan/Spielplan.js';
import Tabelle from "../Pages/Tabelle/Tabelle.js";
import Team from '../Pages/Team/Team.js';
import HallOfFame from '../Pages/HallOfFame/HallOfFame';
import Spiele from '../Pages/Spiele/Spiele.js';
import App from '../../App.js';
import Impressum from '../Organisation/Imprint/Imprint.js';
import Footer from '../Footer/index.js';
import SignatureLogo from '../SignatureLogo/SignatureLogo.js';
import ScrollToTop from '../ScrollToTop/ScrollToTop.js';

const Routing = () => {
    const [isLoggedIn, setIsLoggedIn] = useState (false)

    fire.auth().onAuthStateChanged((user) => {return user ? setIsLoggedIn(true) : setIsLoggedIn (false) })


  return (
    <Router>
      <ScrollToTop />
    <NavigationBar />
    
    {isLoggedIn ? (
    <Switch>
        <Route exact path='/' component={App}>
          <Redirect to = "/Homepage" component={Homepage}/>
        </Route>
        <Route path='/Homepage' component={Homepage} />
        <Route path='/Team' component={Team} />
        <Route path='/Tabelle' component={Tabelle} />
        <Route path='/Spielplan' component={Spielplan} />
        <Route path='/HallOfFame' component={HallOfFame} />
        <Route path='/Spiele' component={Spiele} />
        <Route path='/Impressum' component={Impressum} />
        
      </Switch>

      ) : (
        <Switch>
        <Route exact path='/' component={App}>
          <Redirect to = "/Homepage" component={Homepage}/>
        </Route>
        <Route path='/Homepage' component={Homepage} />
        <Route path='/Team' component={Team} />
        <Route path='/Tabelle' component={Tabelle} />
        <Route path='/Spielplan' component={Spielplan} />
        <Route path='/HallOfFame' component={HallOfFame} />
        <Route path='/Spiele' component={Spiele} />
        <Route path='/Impressum' component={Impressum} />


        </Switch>
      )}
      <SignatureLogo />
      <Footer />
  </Router>



  );
};

export default Routing;
