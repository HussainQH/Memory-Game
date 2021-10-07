import Card from "./Card";
import cards from "../Cards";

function CardsList() {
  const cardList = cards.map((card) => <Card card={card} />);
  const fullList = cardList.concat(cardList);

  return <div className="grid-container"> {fullList}</div>;
}

export default CardsList;
