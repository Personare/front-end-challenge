// @flow

import React from 'react'
import Card from './Card'
import styled from 'styled-components'
import type {
  CardListType,
  OnSelectCBType,
} from './Game.types'

const CardSetContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  overflow: hidden;
`
type CardSetPropsType = {
  cards: CardListType,
  flip: boolean,
  shuffle: boolean,
  selectable: boolean,
  onSelect: OnSelectCBType,
}

const CardSet = ({
  cards = [],
  flip = false,
  shuffle = false,
  selectable = false,
  onSelect,
} : CardSetPropsType) => (
  <CardSetContainer>
    {cards.map((card, index) =>
      <Card
        key={index}
        {...card}
        flip={flip}
        shuffle={shuffle}
        selectable={selectable}
        onSelect={onSelect}
      />
    )}
  </CardSetContainer>
)

export default CardSet
