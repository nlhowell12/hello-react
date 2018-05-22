import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Text extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name,
      color: this.props.color
    }
  }
  render() {
    return (
      <p style={{color:this.state.color}}>{this.state.name}</p>
    )
  }
};   

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <h1>Hello, <Text color="red" name="Nick" /></h1>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
