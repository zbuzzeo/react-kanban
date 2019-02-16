import React from 'react';
import Card from '../Card';
import './Column.scss';

const Column = (props) => {
  // for every card Object in the array, we want to inject its properties into its corresponding component.
  const { title } = props;
  console.log(`THIS IS PROPS.CARDS...`);
  console.log(props.cards);
  const cardList = props.cards.map(card => {
    const { id, title, body, priority, status_id, created_by, assigned_to } = card;

    console.log(`COLUMN CARD STATUS IS: ${ status_id }`);

    return (<Card key={ id } cardId={ id } title={ title } body={ body } priority={ priority } status={ status_id } created_by={ created_by } assigned_to={ assigned_to } />);
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
