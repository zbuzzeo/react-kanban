import React from 'react';
import Card from '../Card';

const Column = (props) => {
  // for every card Object in the array, we want to inject its properties into its corresponding component.
  console.log(props);
  const cardList = props.cards.map(card => {
    const { id, title, body, priority, assigned_to } = card;

    return (<Card key={ id } title={ title } body={ body } priority={ priority } assigned_to={ assigned_to } />);
  });

  console.log(cardList);
  
  return (
    <div className="column">
      { cardList }
    </div>
  );
}

export default Column;
