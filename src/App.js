import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    const {count}=this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div></div>
          <Clock time={count} />
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
        {
        running:true,
        count:1500,
        }
      );
    }
  }
  startLunch() {
    if(this.timer) {
      clearInterval(this.timer);
      this.setState(
        {
        running:true,
        count:6000,
        }
      );
    }
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
class Clock extends React.Component {
  format(time) {
    let seconds = time % 60;
    let minutes = Math.floor(time / 60);
    minutes = minutes.toString().length === 1 ? "0" + minutes : minutes;
    seconds = seconds.toString().length === 1 ? "0" + seconds : seconds;
    return minutes + ':' + seconds;
  }
  render () {
    const {time} = this.props;
    return (
      <div className="displayedTime">
        <h1>{this.format(time)}</h1>
      </div>
    )
  }
}


export default App;
/////////////////////////////////////////////////////////////
                        // EXAMPLE:
// https://codepen.io/rebeccaeilering/pen/dRxzvR?editors=1010
