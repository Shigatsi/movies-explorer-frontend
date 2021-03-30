import React from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';

import './App.css';

import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import PageNotFound from '../PageNotFound/PageNotFound';

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
          <Header />
            movies
          <Footer />
        </Route>
        <Route path = '/saved-movies'>
          <Header />
          saved-movies
          <Footer />
        </Route>
        <Route path = '/profile'>
          <Header />
          profile
        </Route>
        <Route path = '/sign-up'>
          sign-up
        </Route>
        <Route path = '/sign-in'>
          sign-in
        </Route>
        <Route path = '*'>
          <PageNotFound />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
