var React = require('react');
var Header = require('./Header.react');
var Order = require('./Order.react');
var Inventory = require('./Inventory.react');
/*
  App
*/

var App = React.createClass({

  getInitialState: function() {
    return{
      fishes: {},
      order: {}
    }
  },
  addFish: function(fish) {
    var timestamp = (new Date()).getTime();
    //update the state object
    this.state.fishes['fish-' + timestamp] = fish;
    //set the state
    //this.setState(this.state);
    this.setState({fishes: this.state.fishes});
  },
  render : function() {
    console.log(this);
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market"/>
        </div>
        <Order/>
        <Inventory addFish={this.addFish}/>
      </div>
    )
  }
});

module.exports = App;
