var React = require('react');
var AddFishForm = require('./AddFishForm.react');
/*
  Inventory
  <Inventory/>
*/
var Inventory = React.createClass({

  render : function() {

    return (
      <div>
        <p>Inventory</p>
        <AddFishForm {...this.props} />
        <button onClick={this.props.loadSamples}>Load Sample Fishes</button>
      </div>
    )
  }
});

module.exports = Inventory;
