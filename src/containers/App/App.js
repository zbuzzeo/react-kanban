import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../../components/Header';
import Board from '../Board';
import cardReducer from '../../reducers';
import './App.css';
import { loadCards } from '../../actions';

class App extends Component {
  constructor (props) {
    super(props);

    this.state = {
      headerTitle : `KANBAN`,
    }
  }

  render() {
    return (
      <div className="App">
        <Header title={ this.state.headerTitle } />
        {/* the Board component should have a cards prop referencing the array of cards that we get from the reducer. */}
        <Board />
      </div>
    );
  }
}

const mapStateToProps = (state) => {

}

const mapDispatchToProps = (dispatch) => {
  return {
    
  }
}

connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default App;
