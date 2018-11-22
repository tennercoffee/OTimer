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
          <Clock time={count} />
          <Button label="Break" onClickHandler={this.startBreak.bind(this)} onSetCountdown={this.handleCountdown.bind(this.value)}/>
          <Button label="Lunch" onClickHandler={this.startLunch.bind(this)} onSetCountdown={this.handleCountdown.bind(this)}/>
          <Button label="Reset" id="reset_button" onClickHandler={this.reset.bind(this)} />
          <Button label="Settings" onClickHandler={this.showSettings.bind(this)} />
          <Input  onSetCountdown={this.handleCountdown.bind(this)}/>
        </header>
      </div>
    );
  }
  startBreak() {
    // if(this.count) {
      console.log(this.count);
      clearInterval(this.timer);
      this.setState(
        {
        running: true,
        count: 900,
        }
      );
    // }
  }
  startLunch() {
    // if(this.timer) {
      console.log(this.count);
      clearInterval(this.timer);
      this.setState(
        {
        running: true,
        count: 3600,
        }
      );
    // }
  }
  reset() {
    this.setState(
      {
        running: false,
        count: 0,
      }
    );
  }
  componentDidUpdate(prevProps, prevState) {
    if(this.state.running !== prevState.running){
      switch(this.state.running) {
        case true:
          this.handleStart();
      }
    }
  }
  handleCountdown(seconds) {
    this.setState({
      count: seconds,
      running: true
    })
  }
  handleStart() {
    this.timer = setInterval(() => {
      const newCount = this.state.count - 1;
      this.setState(
        {count: newCount >= 0 ? newCount : 0}
      );
    }, 1000);
  }
  showSettings () {

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
class Settings extends React.Component {
  render () {
    const {lunch_limit} = this.props;
    return (
      <div id="settings">
        <input />
      </div>
    );
  }
}

class Input extends React.Component {

  onSubmit(event) {
    event.preventDefault();
    const strSeconds = this.refs.seconds.value;
    if(strSeconds.match(/[0-9]/)) {
      this.refs.seconds.value = '';
      this.props.onSetCountdown(parseInt(strSeconds, 10));

      //right here I need to save to a constant variable the value in the input



    }
  }

  render() {
    return (
      <form ref="form" onSubmit={this.onSubmit.bind(this)}>
        <input type="text" ref="seconds" placeholder="enter time in seconds"/>
        <input type="submit" value="Start"></input>
      </form>
    )
  }
}


export default App;
/////////////////////////////////////////////////////////////
                        // EXAMPLE:
// https://codepen.io/rebeccaeilering/pen/dRxzvR?editors=1010
