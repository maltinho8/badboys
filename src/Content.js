import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Login, Register } from './components/Auth';
import Team from './components/Team/team';
import Tabelle from './components/Tabelle/tabelle';
import Spielplan from './components/Spielplan/spielplan';
import Homepage from './components/LandingPage/LandingPage';
import { useUser } from './components/hooks';
import axios from 'axios';
const url = 'http://localhost:8080/api';

const Content = () => {
  const { handleSignOut, user } = useUser();

  console.log(user);

  const getTeam = async () => {
    const header = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${'userToken'}`,
      },
    };
    const res = await axios.get(url, header);
    console.log(res);
  };

  useEffect(() => {
    if (user) {
      getTeam();
    }
    // eslint-disable-next-line
  }, [user]);
  return (
    <div>
      <div onClick={handleSignOut}>Sign out</div>
      {!user ? (
        <Switch>
          <Route path="/">
            <Login />
          </Route>
        </Switch>
      ) : (
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
      )}
    </div>
  );
};

export default Content;
