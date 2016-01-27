
import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, History} from 'react-router';
import {createHistory} from 'history';
//createBrowserHistory.createHistory();


import NotFound from './components/NotFound.react';
import StorePicker from './components/StorePicker.react';
import App from './components/App.react';


/*
  Routes
*/

var routes = (
  <Router history={createHistory()}>
    <Route path="/" component={StorePicker}/>
    <Route path="/store/:storeId" component={App}/>
    <Route path="*" component={NotFound}/>
  </Router>
)

ReactDOM.render(routes, document.querySelector('#main'));
