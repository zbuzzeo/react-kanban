import React from 'react';
import './Card.scss';

const Card = (props) => {
  const { cardId, title, body, priority, assigned_to } = props;

  return (
    <div className="card">
      <div className="cardIdContainer">
        <div className="cardId">{ cardId }</div>
      </div>
      
      <div className="cardContent">
        <div className="cardTitle">{ title }</div>

        <div className="cardDetails">
          <div className="cardBody">{ body }</div>
          
          <div className="cardConditions">
            <div className="cardPriority">Priority: { priority }</div>
            <div className="cardAssignedTo">Assigned to: { assigned_to }</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
