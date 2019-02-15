import React, { Component } from 'react';
import ReactModal from 'react-modal';
import AddCard from '../AddCard';
import './NewTask.scss';

class NewTask extends Component {
  constructor (props) {
    super(props);

    this.state = {
      buttonTitle : `+ NEW TASK`,
      showModal : false
    }

    this.handleToggleModal = this.handleToggleModal.bind(this);
  }

  handleToggleModal() {
    return this.setState({ showModal : !this.state.showModal });
  }

  render() {
    return (
      <div className="NewTask">
        <div onClick={ this.handleToggleModal } className="NewTaskButton">
          <span className="buttonText">{ this.state.buttonTitle }</span>
        </div>
        <ReactModal 
          isOpen={ this.state.showModal } 
          contentLabel="modal" 
          onRequestClose={ this.handleToggleModal }
          className="modal" 
          overlayClassName="overlay"
          shouldCloseOnOverlayClick={ true }
        >
          <div className="headerContainer">
            <span className="headerText">ADD A CARD</span>
          </div>
          {/* also call this.handleCloseModal when a user clicks off of the modal */}
          <AddCard />
        </ReactModal>
        {/* <div className="NewTaskModal"></div> */}
      </div>
    );
  }
}

// ReactModal.setAppElement('.NewTaskModal');

export default NewTask;
