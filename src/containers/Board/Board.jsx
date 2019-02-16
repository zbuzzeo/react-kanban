import React, { Component } from 'react';
import Column from '../../components/Column';
import { connect } from 'react-redux';
import { loadCards } from '../../actions';
import './Board.scss';

class Board extends Component {
  constructor (props) { 
    super(props);

    this.state = {
      
    }
  }

  filterStatus(acceptedStatus) {
    const { cards } = this.props;

    if (cards) {
      return cards.filter(card => {

        return card.status_id === acceptedStatus;
      });
    }
  }

  componentDidMount() {
    this.props.onLoad();
  }

  render() {
    return (
      <div className="Board">
        <Column cards={ this.filterStatus(1) } title="IN QUEUE" />
        <Column cards={ this.filterStatus(2) } title="IN PROGRESS" />
        <Column cards={ this.filterStatus(3) } title="DONE" />
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
      return dispatch(loadCards());
    }
  };
}

Board = connect(
  mapStateToProps,
  mapDispatchToProps
)(Board);

export default Board;
