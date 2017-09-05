// @flow

import React, { Component } from 'react'
import styled, { css } from 'styled-components'
import type { CardType, EventType, OnSelectCBType } from './Game.types'

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

export const FlipContainer = styled.div`
  flex: 1;
  perspective: 1000px;
  transition: 1s;
  margin-left: ${p => p.shuffle? '-180px' : '1px' };
  margin-top: ${p => p.shuffle? '-85px' : '1px' };

  &:hover {
    border: ${p => p.selectable ? '1px solid red' : 'none'};
  }
`

export const CardImage = styled.img`
  ${mixCardSize}
`

type Props = CardType & {
  flip: boolean,
  shuffle: boolean,
  selectable: boolean,
  onSelect: OnSelectCBType
}

type State = {
  selected: boolean,
}


class Card  extends Component<Props, State> {

  state = {
    selected: false
  }

  handleFilpContainerClick = (e : EventType) => {
    e.preventDefault()
    const selected = this.props.selectable && !this.state.selected
    this.setState({ selected })
    return selected && this.props.onSelect(e, this.props)
  }

  render() {

    const {
      imageUrl,
      backImageUrl,
      shuffle,
      selectable,
    } = this.props

    const fliped = !this.state.selected && this.props.flip

    return (
      <FlipContainer
        shuffle={shuffle}
        selectable={selectable}
        onClick={this.handleFilpContainerClick}
      >
        <Flipper>
          <FlipperFront flip={fliped}>
            <CardImage src={imageUrl} />
          </FlipperFront>
          <FlipperBack flip={fliped}>
            <CardImage src={backImageUrl} />
          </FlipperBack>
        </Flipper>
      </FlipContainer>
    )
  }
}

export default Card
