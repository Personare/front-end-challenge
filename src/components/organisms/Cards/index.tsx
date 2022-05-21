import React from 'react';

import Card from 'components/molecules/Card';

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

export type Props = {
  disabled?: boolean;
  data: CardsProps;
};

const Cards = ({ disabled = false, data }: Props) => {
  const { imagesUrl, imageBackCard, cards } = data;

  return (
    <S.Cards>
      {cards &&
        cards.map((card, index) => (
          <S.CardWrapper key={index + 1}>
            <Card
              face={disabled ? 'up' : 'down'}
              width="62px"
              height="130px"
              frontImage={{ src: `${imagesUrl}${card.image}`, alt: card.name }}
              backImage={{ src: imageBackCard, alt: 'Carta virada pra baixo' }}
            />
          </S.CardWrapper>
        ))}
    </S.Cards>
  );
};

export default Cards;
