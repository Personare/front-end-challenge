import { ICard, ICardList } from "../../config/interfaces";
import Card from "../Card";
import { List } from "./styles";

const CardList: React.FC<ICardList> = ({ cards, onClick }) => {
  return (
    <List data-cy="card-list">
      {cards?.map((card: ICard) => (
        <Card key={card.name} card={card} onClick={onClick} />
      ))}
    </List>
  );
};
export default CardList;
