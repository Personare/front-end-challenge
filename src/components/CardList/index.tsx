import { ICard, ICardList } from "../../config/interfaces";
import Card from "../Card";
import { List } from "./styles";

const CardList: React.FC<ICardList> = ({ cards, onClick, isPlaying }) => {
  return (
    <List data-cy="card-list" isPlaying={isPlaying}>
      {cards?.map((card: ICard) => (
        <Card isMinimal key={card.name} card={card} onClick={onClick} />
      ))}
    </List>
  );
};
export default CardList;
