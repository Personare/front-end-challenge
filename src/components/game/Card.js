// @flow

import React from 'react'
import styled, { css } from 'styled-components'
import type CardType from './Game.types'

const mixCardSize = css`
  width: 38px;
  height: 80px;
`

const Flipper = styled.div`
  ${mixCardSize}
	transform-style: preserve-3d;

	position: relative;
  margin: 5px 10px;
`

const mixFrontBack = css`
  backface-visibility: hidden;
  transition: 0.6s;
  position: absolute;
  top: 0;
  left: 0;
`

const FlipperFront = styled.div`
  ${mixCardSize}
  ${mixFrontBack}
  z-index: 2;
	/* for firefox 31 */
	transform: rotateY(0deg);
`

const FlipperBack = styled.div`
  ${mixCardSize}
  ${mixFrontBack}
  transform: rotateY(-180deg);
`

const FlipContainer = styled.div`
  flex: 1;
  perspective: 1000px;

  &:hover ${FlipperFront} {
    transform: rotateY(180deg);
  }

  &:hover ${FlipperBack} {
    transform: rotateY(0deg);
  }

  &:hover {
    border: ${p => p.selectable ? '1px solid red' : 'none'};
  }
`

export const CardImage = styled.img`
  ${mixCardSize}
`

const Card = ({ imageUrl, backImageUrl } : CardType) => (
  <FlipContainer>
    <Flipper>
      <FlipperFront>
        <CardImage src={imageUrl} />
      </FlipperFront>
      <FlipperBack>
        <CardImage src={backImageUrl} />
      </FlipperBack>
    </Flipper>
  </FlipContainer>
)

export default Card
