var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');

var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var History = ReactRouter.History;
var createBrowserHistory = require('history');
//createBrowserHistory.createHistory();

var h = require('./helpers');
var NotFound = require('./components/NotFound.react');
var StorePicker = require('./components/StorePicker.react');
var App = require('./components/app.react');

/*
  Routes
*/
var routes = (
  <Router history={createBrowserHistory.createHistory()}>
    <Route path="/" component={StorePicker}/>
    <Route path="/store/:storeId" component={App}/>
    <Route path="*" component={NotFound}/>
  </Router>
)

ReactDOM.render(routes, document.querySelector('#main'));
