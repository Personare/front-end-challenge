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

export const FlipperFront = styled.div`
  ${mixCardSize}
  ${mixFrontBack}
  z-index: 2;
	/* for firefox 31 */
	transform: ${p => p.flip? 'rotateY(180deg)' : 'rotateY(0deg)'};
`

export const FlipperBack = styled.div`
  ${mixCardSize}
  ${mixFrontBack}
  transform: ${p => p.flip? 'transform: rotateY(0deg);' : 'rotateY(-180deg)'};;
`

const FlipContainer = styled.div`
  flex: 1;
  perspective: 1000px;

  &:hover {
    border: ${p => p.selectable ? '1px solid red' : 'none'};
  }
`

export const CardImage = styled.img`
  ${mixCardSize}
`

type Props = CardType & {
  flip: boolean,
}

const Card = ({ imageUrl, backImageUrl, flip } : Props) => (
  <FlipContainer>
    <Flipper>
      <FlipperFront flip={flip}>
        <CardImage src={imageUrl} />
      </FlipperFront>
      <FlipperBack flip={flip}>
        <CardImage src={backImageUrl} />
      </FlipperBack>
    </Flipper>
  </FlipContainer>
)

export default Card
