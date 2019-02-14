import React, { Component } from 'react';
import Modal from 'react-modal';
import './NewTask.scss';

class NewTask extends Component {
  constructor (props) {
    super(props);

    this.state = {
      buttonTitle : `+ NEW TASK`,
    }
  }

  render() {
    return (
      <div className="NewTask">
        <div className="NewTaskButton">
          <span className="buttonText">{ this.state.buttonTitle }</span>
        </div>
      </div>
    );
  }
}

export default NewTask;
