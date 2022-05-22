import React, { useRef } from 'react';

import CardFace from 'components/atoms/CardFace';
import useOnClickOutside from 'hooks/useOnClickOutside';

import * as S from './styles';

type ImageProps = {
  src: string;
  alt: string;
};

type Props = {
  name: string;
  frontImage: ImageProps;
  backImage: ImageProps;
};

const SelectedCard = ({ name, frontImage, backImage }: Props) => {
  const ref = useRef(null);

  useOnClickOutside(ref, () => {
    ref.current.style.display = 'none';
  });

  return (
    <S.SelectedCard ref={ref}>
      <S.FrontCardWrapper>
        <S.SelectedCardImageWrapper>
          <CardFace imageSource={frontImage.src} imageAlt={frontImage.alt} />
        </S.SelectedCardImageWrapper>

        <S.SelectedCardName>{name}</S.SelectedCardName>

        <S.SelectedCardDescription>
          lorem ipsum dolor sit amet consectetur adipiscing elit
        </S.SelectedCardDescription>
      </S.FrontCardWrapper>

      <S.BackCardWrapper>
        <CardFace imageSource={backImage.src} imageAlt={backImage.alt} />
      </S.BackCardWrapper>
    </S.SelectedCard>
  );
};

export default SelectedCard;
