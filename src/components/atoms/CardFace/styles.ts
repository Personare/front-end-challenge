import styled from 'styled-components';

type CardFaceProps = {
  rotate: string;
};

export const CardFace = styled.div<CardFaceProps>`
  backface-visibility: hidden;
  height: inherit;
  overflow: hidden;
  position: absolute;
  transform: perspective(200px) rotateY(${({ rotate }) => rotate});
  transition: transform 0.6s linear;
`;

export const CardImage = styled.img`
  height: 100%;
  object-fit: cover;
  object-position: center;
  width: 100%;
`;
