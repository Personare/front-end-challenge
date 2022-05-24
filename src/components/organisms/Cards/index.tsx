import React, { useEffect, useState } from 'react';

import Card from 'components/molecules/Card';
import SelectedCard from 'components/molecules/SelectedCard';

import shuffle from 'utils/shuffle';

import * as S from './styles';

type CardProps = {
  name: string;
  image: string;
};

export type CardsProps = {
  imagesUrl: string;
  imageBackCard: string;
  cards: CardProps[];
};

type Props = {
  activated?: boolean;
  data: CardsProps;
};

const Cards = ({ activated = false, data }: Props) => {
  const { imagesUrl, imageBackCard, cards: cardsData } = data;
  const [cards, setCards] = useState(cardsData);
  const [selectedCard, setSelectedCard] = useState(null);
  const [disabled, setDisabled] = useState(true);

  const shuffleCards = () => {
    setCards(shuffle(cards));
    setDisabled(false);
  };

  const handleClick = (name: string, image: string) => {
    if (disabled) {
      return;
    }

    setSelectedCard(
      <SelectedCard
        name={name}
        frontImage={{ src: image, alt: name }}
        backImage={{ src: imageBackCard, alt: 'Carta virada pra baixo' }}
      />
    );
    setDisabled(true);
  };

  useEffect(() => {
    if (!activated) {
      return;
    }

    setTimeout(shuffleCards, 1000);
  }, [activated]);

  return (
    <S.Cards>
      {cards &&
        cards.map((card, index) => (
          <S.CardWrapper
            key={index + 1}
            onClick={() => handleClick(card.name, `${imagesUrl}${card.image}`)}
            value={card.name}
          >
            <Card
              face={!activated ? 'up' : 'down'}
              width="62px"
              height="130px"
              frontImage={{ src: `${imagesUrl}${card.image}`, alt: card.name }}
              backImage={{ src: imageBackCard, alt: 'Carta virada pra baixo' }}
            />
          </S.CardWrapper>
        ))}

      {selectedCard}
    </S.Cards>
  );
};

export default Cards;
