import React, { Component } from 'react';
import { getFunName } from '../helpers';

class StorePicker extends Component {

  constructor() {
    super();
    this.goToStore = this.goToStore.bind(this);
  }

  goToStore(event) {
    event.preventDefault();
    const storeId = this.storeInput.value;
    console.log(this.storeInput.value);
    console.log(`Going to ${storeId}`);
    this.context.router.transitionTo(`/store/${storeId}`);

  }

  render() {
    return (
      <form action="" className="store-selector" onSubmit={this.goToStore}>
        <h2>Please Enter A Store</h2>
        
        <input  type="text" ref={(input) => { this.storeInput = input }} placeholder="Store Name" defaultValue={getFunName()} required />
        <button type="submit">Visit Store</button>
      </form>
    );
  }
}

StorePicker.contextTypes = {
  router: React.PropTypes.object
}

export default StorePicker;