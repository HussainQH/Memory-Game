import Card from "./Card";
import cards from "../Cards";

function CardsList() {
  const cardList = cards.map((card) => <Card card={card} />);

  return <div>{cardList}</div>;
}

export default CardsList;
