import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addCard } from '../../actions';
import './AddCard.scss';

class AddCard extends Component {
  constructor (props) {
    super(props);

    this.state = {
      id : 1,
      title : '',
      body : '',
      priority : '',
      status : '',
      created_by : '',
      assigned_to : ''
    }

    this.handleTitleOnChange = this.handleTitleOnChange.bind(this);
    this.handleBodyOnChange = this.handleBodyOnChange.bind(this);
    this.handlePriorityOnChange = this.handlePriorityOnChange.bind(this);
    this.handleStatusOnChange = this.handleStatusOnChange.bind(this);
    this.handleCreatedByOnChange = this.handleCreatedByOnChange.bind(this);
    this.handleAssignedToOnChange = this.handleAssignedToOnChange.bind(this);
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
  }

  handleTitleOnChange(e) {
    const value = e.target.value;
    this.setState({ title : value });
  }

  handleBodyOnChange(e) {
    const value = e.target.value;
    this.setState({ body : value });
  }

  handlePriorityOnChange(e) {
    const value = e.target.value;
    this.setState({ priority : value });
  }

  handleStatusOnChange(e) {
    const value = e.target.value;
    this.setState({ status : value });
  }

  handleCreatedByOnChange(e) {
    const value = e.target.value;
    this.setState({ created_by : value });
  }

  handleAssignedToOnChange(e) {
    const value = e.target.value;
    this.setState({ assigned_to : value });
  }

  handleOnSubmit(e) {
    e.preventDefault();

    const { title, body, priority, status, created_by, assigned_to } = this.state;

    // dispatch on props - from mapDispatchToProps
    this.props.onAdd({
      title : title,
      body : body,
      priority : priority,
      status : status,
      created_by : created_by,
      assigned_to : assigned_to
    })

    // clear input
    this.setState({
      title : '',
      body : '',
      priority : '',
      status : '',
      created_by : '',
      assigned_to : ''
    })
  }

  render() {
    const { title, body, priority, status, created_by, assigned_to } = this.state;
    return (
      // All of the input fields and select elements rely on the fact that state will change. Nothing will happen in this form until all elements in the form have an .onChange handler.
      // The value of "option" for selectPriority has to be an id.
      <div className="formContainer">
        <form className="taskSubmission">
          <input onChange={ this.handleTitleOnChange } type="text" value={ title } placeholder="Title" />
          <input onChange={ this.handleBodyOnChange } type="text" value={ body } placeholder="A brief description" />

          <select onChange={ this.handlePriorityOnChange } className="selectPriority">
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
            <option value="Blocker">Blocker</option>
          </select>

          <select onChange={ this.handleStatusOnChange } className="selectStatus">
            <option value="In Queue">In Queue</option>
            <option value="In Progress">In Progress</option>
            <option value="Done">Done</option>
          </select>
          
          <input onChange={ this.handleCreatedByOnChange } type="text" value={ created_by } placeholder="Your name" />
          <input onChange={ this.handleAssignedToOnChange } type="text" value={ assigned_to } placeholder="Assigned to" />
          <input onClick={ this.handleOnSubmit } type="submit" value="SUBMIT" className="submit" />
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
}

const mapDispatchToProps = (dispatch) => {
  return {
    onAdd: (card) => {
      // ADD_CARD object with a payload of `card`
      const actionObject = addCard(card);

      dispatch(actionObject);
    }
  };
}

AddCard = connect(
  mapStateToProps,
  mapDispatchToProps
)(AddCard);

export default AddCard;
