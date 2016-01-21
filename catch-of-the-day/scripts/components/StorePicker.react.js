var React = require('react');
var helpers = require('../helpers');
var ReactRouter = require('react-router');

var History = ReactRouter.History;
/*
  StorePicker
  This will let us make <StorePicker/>
*/

var StorePicker = React.createClass({
  mixins: [History],
  goToStore : function(e){
    e.preventDefault();
    var storeId = this.refs.storeId.value;
    this.history.pushState(null, '/store/' + storeId);
  },
  render : function() {
    return (
      <form className="store-selector" onSubmit={this.goToStore}>
        <h2>Please Enter A Store</h2>
        <input type="text" ref="storeId" defaultValue={helpers.default.getFunName()}required />
        <input type="Submit" />
      </form>
    )
  }
});

module.exports = StorePicker;
