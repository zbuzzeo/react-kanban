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
    console.log(cards); 

    if (cards) {
      return cards.filter(card => {
        console.log(`Current card is`);
        console.log(card);
        console.log(`with status: ${ card.status_id }`);

        switch (card.status_id) {
          case 1:
            card.status_id = 'IN QUEUE';
            break;
          case 2:
            card.status_id = 'IN PROGRESS';
          case 3:
            card.status_id = 'DONE';
          default:
            console.log(`invalid status id is: ${ card.status_id }`);
            break;
        }

        return card.status_id === acceptedStatus;
      });
    }
  }

  componentDidMount() {
    this.props.onLoad();
    console.log(this.props.cards);
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
      return dispatch(loadCards());
    }
  };
}

Board = connect(
  mapStateToProps,
  mapDispatchToProps
)(Board);

export default Board;
