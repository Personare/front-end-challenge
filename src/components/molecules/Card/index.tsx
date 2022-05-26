import React from 'react';

import CardFace from 'components/atoms/CardFace';

import * as S from './styles';

type ImageProps = {
  src: string;
  alt: string;
};

type Props = {
  face: string;
  width: string;
  height: string;
  frontImage: ImageProps;
  backImage: ImageProps;
};

const Card = ({ face, width, height, frontImage, backImage }: Props) => (
  <S.Card width={width} height={height}>
    <CardFace
      rotate={face === 'up' ? '0deg' : '-180deg'}
      imageSource={frontImage.src}
      imageAlt={frontImage.alt}
    />
    <CardFace
      rotate={face === 'down' ? '0deg' : '180deg'}
      imageSource={backImage.src}
      imageAlt={backImage.alt}
    />
  </S.Card>
);

export default Card;
