import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Bug Vr Studio</h2>
        </div>
        <p className="App-intro">
          El mejor sitio de VR 
        </p>
      </div>
    );
  }
}

export default App;
