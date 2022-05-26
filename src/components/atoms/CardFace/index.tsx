import React from 'react';

import * as S from './styles';

type Props = {
  rotate?: string;
  imageSource: string;
  imageAlt: string;
};

const CardFace = ({ rotate = '0deg', imageSource, imageAlt }: Props) => (
  <S.CardFace rotate={rotate}>
    <S.CardImage src={imageSource} alt={imageAlt} />
  </S.CardFace>
);

export default CardFace;
