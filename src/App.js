import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div></div>
          <Button label="Break" onClickHandler={this.startBreak.bind(this)} />
          <Button label="Lunch" onClickHandler={this.startLunch.bind(this)} />
          <Button label="Settings" id="settings_button" />
          <Button label="Reset" id="reset_button" onClickHandler={this.reset.bind(this)} />
        </header>
      </div>
    );
  }
  startBreak() {
    if(this.timer) {
      clearInterval(this.timer);
      this.setState(
        {running:true}
      );
    }
  }
  startLunch() {
    console.log('lunch');
  }
  reset() {
    this.state = {
      count:0,
    }
  }
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      running: false,
    }
  }
}
class Button extends React.Component {
  render() {
    return (
      <button onClick={this.props.onClickHandler} id={this.props.id}>{this.props.label}</button>
    );
  }
}



export default App;
/////////////////////////////////////////////////////////////
                        // EXAMPLE:
// https://codepen.io/rebeccaeilering/pen/dRxzvR?editors=1010
