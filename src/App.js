import React, { Component } from 'react';
import { Provider } from 'react-redux'
import store from './store'
import ConnectedRestaurantList from './container';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <ConnectedRestaurantList />
       </div>
      </Provider>
    );
  }
}

export default App;
