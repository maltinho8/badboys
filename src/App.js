import './App.css';
import React from 'react';
import AppBar from "./components/AppBar/appbar";
import  { ThemeProvider }  from 'styled-components';
import theme, { GlobalStyle } from './Theme';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Home, News } from './components/Pages';

const App = () => {
  return (
      <ThemeProvider theme={theme}>
        <GlobalStyle/>
        <Router>
          <div>
          <AppBar />
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/news">
                <News />
              </Route>
            </Switch>
          </div>
        </Router>
      </ThemeProvider>
  );
}

export default App;
