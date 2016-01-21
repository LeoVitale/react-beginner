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
      <AddFishForm {...this.props}/>
      </div>
    )
  }
});

module.exports = Inventory;
