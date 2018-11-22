import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div class="countdown"></div>
          <button>Break</button>
          <button>Lunch</button>
          <button>Settings</button>
        </header>
      </div>
    );
  }
}

export default App;
/////////////////////////////////////////////////////////////
                        // EXAMPLE:
// https://codepen.io/rebeccaeilering/pen/dRxzvR?editors=1010
