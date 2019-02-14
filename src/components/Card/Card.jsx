import React from 'react';
import './Card.scss';

const Card = (props) => {
  const { cardId, title, body, priority, status, created_by, assigned_to } = props;

  return (
    <div className={ status }>
      <div className="cardIdContainer">
        <div className="cardId">{ cardId }</div>
      </div>

      <div className="cardContent">
        <div className="cardTitle">{ title }</div>

        <div className="cardDetails">
          <div className="cardBody">{ body }</div>
          
          <div className="cardConditions">
            <div className="cardPriority">Priority: { priority }</div>
            <div className="cardAssignedBy">Assigned by: { created_by }</div>
          </div>
        </div>

        {/* <div className="cardExtras">
          <div className="cardInteraction">
            <button className="cardEdit"></button>
            <button className="cardDelete"></button>
          </div>
          <div className="cardAssignedTo">{ assigned_to }</div>
        </div> */}
      </div>
    </div>
  );
}

export default Card;
