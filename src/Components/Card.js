import { useState } from "react";

function Card(props) {
  const card = props.card;
  const [flip, setFlip] = useState(false);
  return (
    <div>
      <img
        className="grid-item"
        alt={card.name}
        src={flip === false ? card.back : card.front}
        onClick={() => setFlip(!flip)}
      />
    </div>
  );
}

export default Card;
