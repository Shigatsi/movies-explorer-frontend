import React from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';

import './App.css';

import Header from '../Header/Header';
import Main from '../Main/Main';

function App() {
  return (
    <div className="page">
      'THIS SHIT IS WORKING!!!'
      <Header/>
      <Route path = '/'>
        <Main/>
      </Route>
    </div>
  );
}

export default App;
