import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import khicong from './images/khicong.jpg';
import greenlight from './images/greenlight.jpg';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

          <div>
              <img src={khicong} />
          </div>

          <div>
              <img src={greenlight} />
          </div>
      </div>
    );
  }
}

export default App;
