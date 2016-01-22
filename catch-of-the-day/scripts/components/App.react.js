var React = require('react');
var Header = require('./Header.react');
var Order = require('./Order.react');
var Inventory = require('./Inventory.react');
var Fish = require('./Fish.react');
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
  addToOrder: function(key){
    this.state.order[key] = this.state.order[key] + 1 || 1;
    this.setState({order: this.state.order});
  },
  addFish: function(fish) {
    var timestamp = (new Date()).getTime();
    //update the state object
    this.state.fishes['fish-' + timestamp] = fish;
    //set the state
    //this.setState(this.state);
    this.setState({fishes: this.state.fishes});
  },
  loadSamples : function(){
    this.setState({fishes: require('../sample-fishes')});
  },
  renderFish: function (key){
    return <Fish key={key} index={key} details={this.state.fishes[key]} addToOrder={this.addToOrder}/>
  },
  render : function() {
    console.log(this);
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market"/>
          <ul className="list-of-fishes">
            {Object.keys(this.state.fishes).map(this.renderFish)}
          </ul>
        </div>
        <Order fishes={this.state.fishes} order={this.state.order}/>
        <Inventory addFish={this.addFish} loadSamples={this.loadSamples}/>
      </div>
    )
  }
});

module.exports = App;
