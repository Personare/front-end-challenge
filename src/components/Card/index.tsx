import { useContext } from "react";
import ReactCardFlip from "react-card-flip";
import { ICardItem } from "../../config/interfaces";
import GlobalContext from "../../global/GlobalContext";

import { Container, Image } from "./styles";

const Card: React.FC<ICardItem> = ({ card, onClick, isMinimal }) => {
  const { name, image, show } = card;

  const {
    state: { data },
  } = useContext(GlobalContext);

  const isFlipped = !show;

  return (
    <Container data-cy="card" onClick={() => onClick && onClick(name)}>
      <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
        <Image
          isMinimal={isMinimal}
          alt={name}
          src={`${data.imagesUrl}${image}`}
          data-cy={!isFlipped && "card-up"}
        />

        <Image
          isMinimal={isMinimal}
          alt={name}
          src={data.imageBackCard}
          data-cy={isFlipped && "card-down"}
        />
      </ReactCardFlip>
    </Container>
  );
};

export default Card;
