import React, { useState } from 'react';

import Card from 'components/molecules/Card';
import SelectedCard from 'components/molecules/SelectedCard';

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
  disabled?: boolean;
  data: CardsProps;
};

const Cards = ({ disabled = false, data }: Props) => {
  const { imagesUrl, imageBackCard, cards } = data;
  const [selectedCard, setSelectedCard] = useState(null);

  const getImagePath = (image: string) => `${imagesUrl}${image}`;

  const handleClick = (name: string, image: string) => {
    if (disabled || selectedCard !== null) {
      return;
    }

    setSelectedCard(
      <SelectedCard
        name={name}
        frontImage={{ src: image, alt: name }}
        backImage={{ src: imageBackCard, alt: 'Carta virada pra baixo' }}
      />
    );
  };

  return (
    <S.Cards>
      {cards &&
        cards.map((card, index) => (
          <S.CardWrapper
            key={index + 1}
            onClick={() => handleClick(card.name, getImagePath(card.image))}
          >
            <Card
              face={disabled ? 'up' : 'down'}
              width="62px"
              height="130px"
              frontImage={{ src: getImagePath(card.image), alt: card.name }}
              backImage={{ src: imageBackCard, alt: 'Carta virada pra baixo' }}
            />
          </S.CardWrapper>
        ))}

      {selectedCard}
    </S.Cards>
  );
};

export default Cards;
