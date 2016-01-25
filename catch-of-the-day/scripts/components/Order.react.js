var React = require('react');
var h = require('../helpers');
var CSStransitionGroup = require('react-addons-css-transition-group');
/*
  Order
  <Order/>
*/
var Order = React.createClass({

  renderOrder: function(key){
    var fish = this.props.fishes[key];
    var count = this.props.order[key];
    var removeButton = <button onClick={this.props.removeFromOrder.bind(null,key)}>&times; </button>

    if(!fish) {
      return <li key={key}>Sorry, fish no longer available! {removeButton}</li>
    }

    return (
      <li key={key}>
        <span>
        <CSStransitionGroup
          component="span"
          transitionName="count"
          transitionLeaveTimeout={250}
          transitionEnterTimeout={250}>
          <span key={count}>{count}</span>
        </CSStransitionGroup>
        lbs {fish.name} {removeButton}
        </span>
        <span className="price">{h.default.formatPrice(count * fish.price)}</span>

      </li>)
  },
  render : function() {
    var orderIds = Object.keys(this.props.order);

    var total= orderIds.reduce((prevTotal, key)=>{
      var fish = this.props.fishes[key];
      var count = this.props.order[key];
      var isAvailable = fish && fish.status === 'available';

      if(fish && isAvailable) {
        return prevTotal + (count * parseInt(fish.price) || 0);
      }
      return prevTotal;
    },0);

    return (
      <div className="order-wrap">
        <h2 className="order-title">Your Order</h2>
        <CSStransitionGroup className="order"
                            component="ul"
                            transitionName="order"
                            transitionEnterTimeout={500}
                            transitionLeaveTimeout={500}>
          {orderIds.map(this.renderOrder)}
          <li className="total">
            <strong>Total:</strong>
            {h.default.formatPrice(total)}
          </li>
        </CSStransitionGroup>
      </div>
    )
  }
});


module.exports = Order;
