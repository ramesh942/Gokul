import React from 'react';
import ReactDOM from 'react-dom';
import Login from './Container/Login/index';
import DashBoard from './Container/DashBoard/DashBoard';
import * as serviceWorker from './serviceWorker';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  

 ReactDOM.render( <Router>
    
    <Switch>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/DashBoard">
        <DashBoard />
      </Route>
   
    </Switch>
</Router>
, document.getElementById('root'));
// ReactDOM.render(<DashBoard />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
