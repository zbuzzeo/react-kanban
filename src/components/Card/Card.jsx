import React from 'react';

const Card = (props) => {
  const { title, body, priority, assigned_to } = props;

  return (
    <div>
      <div className="cardTitle">{ title }</div>
      <div className="cardBody">{ body }</div>
      <div className="cardPriority">Priority: { priority }</div>
      <div className="cardAssignedTo">Assigned to: { assigned_to }</div>
    </div>
  );
}

export default Card;
