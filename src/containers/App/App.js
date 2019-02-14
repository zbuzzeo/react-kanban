import React, { Component } from 'react';
import { connect } from 'react-redux';
import Board from '../Board';
import './App.css';

class App extends Component {
  constructor (props) {
    super(props);

    this.state = {

    }
  }

  render() {
    return (
      <div className="App">
        <h1>smokey</h1>
        <Board />
      </div>
    );
  }
}

export default App;
