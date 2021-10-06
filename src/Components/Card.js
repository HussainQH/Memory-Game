import React from "react";

function Card(props) {
  const card = props.card;
  return (
    <div className="grid-container">
      {" "}
      <div>
        <img className="memory-card" alt={card.name} src={card.back} />
      </div>
      <div>
        <img className="memory-card" alt={card.name} src={card.back} />
      </div>
    </div>
  );
}

export default Card;
