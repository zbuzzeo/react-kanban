import React from 'react';
import Card from '../Card';
import './Column.scss';

const Column = (props) => {
  // for every card Object in the array, we want to inject its properties into its corresponding component.
  const { title } = props;
  const cardList = props.cards.map(card => {
    const { id, title, body, priority_id, status_id, created_by, assigned_to } = card;
    let priority;
    let status;

    switch (priority_id) {
      case 1:
        priority = 'Low'
        break;
      case 2:
        priority = 'Medium'
        break;
      case 3:
        priority = 'High'
        break;
      case 4:
        priority = 'Blocker'
        break;
      default:
        break;
    }

    switch (status_id) {
      case 1:
        status = 'IN QUEUE';
        break;
      case 2:
        status = 'IN PROGRESS';
        break;
      case 3:
        status = 'DONE';
        break;
      default:
        break;
    }

    return (<Card key={ id } cardId={ id } title={ title } body={ body } priority={ priority } status={ status } created_by={ created_by } assigned_to={ assigned_to } />);
  });
  
  return (
    <div className="column">
      <div className="columnContainer">
        <div className="columnTitle">{ title }</div>
      </div>
      { cardList }
    </div>
  );
}

export default Column;
