import React, { Component } from 'react';
import Column from '../../components/Column';
import { connect } from 'react-redux';
import loadCards from '../../reducers';
import './Board.scss';

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
      <div className="Board">
        <Column cards={ this.filterStatus('IN QUEUE') } title="IN QUEUE" />
        <Column cards={ this.filterStatus('IN PROGRESS') } title="IN PROGRESS" />
        <Column cards={ this.filterStatus('DONE') } title="DONE" />
      </div>
    );
  }
}

// redux
const mapStateToProps = (state) => {
  return { cards : state };
}

const mapDispatchToProps = (dispatch) => {
  return {
    onLoad: () => {
      dispatch(loadCards());
    }
  };
}

Board = connect(
  mapStateToProps,
  mapDispatchToProps
)(Board);

export default Board;
