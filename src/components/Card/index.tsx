import { useContext } from "react";
import ReactCardFlip from "react-card-flip";
import { ICardItem } from "../../config/interfaces";
import GlobalContext from "../../global/GlobalContext";

const Card: React.FC<ICardItem> = ({ card, onClick }) => {
  const { name, image, show } = card;

  const {
    state: { data },
  } = useContext(GlobalContext);

  const isFlipped = !show;

  return (
    <div data-cy="card" onClick={() => onClick && onClick(name)}>
      <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
        <img
          alt={name}
          src={`${data.imagesUrl}${image}`}
          data-cy={!isFlipped && "card-up"}
        />

        <img
          alt={name}
          src={data.imageBackCard}
          data-cy={isFlipped && "card-down"}
        />
      </ReactCardFlip>
    </div>
  );
};

export default Card;
