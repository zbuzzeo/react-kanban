import React, { Component } from 'react';
import Column from '../../components/Column';
import { connect } from 'react-redux';

class Board extends Component {
  constructor (props) { 
    super(props);

    this.state = {

    }
  }

  filterStatus(acceptedStatus) {
    const { cards } = this.props;

    return cards.filter(card => {
      return card.status === acceptedStatus;
    });
  }

  log() {
    return console.log;
  }

  render() {
    return (
      <div>
        <Column cards={ this.filterStatus('IN QUEUE') } />
        <Column cards={ this.filterStatus('IN PROGRESS') } />
        <Column cards={ this.filterStatus('DONE') } />
      </div>
    );
  }
}

// redux
const mapStateToProps = (state) => {
  return { cards : state };
}

const mapDispatchToProps = (dispatch) => {
  return {};
}

Board = connect(
  mapStateToProps,
  mapDispatchToProps
)(Board);

export default Board;
