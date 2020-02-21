import React from 'react';
import ReactDOM from 'react-dom';
import Login from './Login';
import DashBoard from './DashBoard'
import * as serviceWorker from './serviceWorker';


// ReactDOM.render(<Login />, document.getElementById('root'));
ReactDOM.render(<DashBoard />, document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
