import React from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';

import './App.css';

import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer'

function App() {
  return (
    <div className="page">
      <Switch>
        <Route exact path = '/'>
          <Header />
          <Main />
          <Footer />
        </Route>
        <Route path = '/movies'>
            movies
        </Route>
        <Route path = '/saved-movies'>
          saved-movies
        </Route>
        <Route path = '/profile'>
          profile
        </Route>
        <Route path = '/sign-up'>
          sign-up
        </Route>
        <Route path = '/sign-in'>
          sign-in
        </Route>
        <Route path = '*'>
          NOT_FOUND!
        </Route>
      </Switch>
    </div>
  );
}

export default App;
