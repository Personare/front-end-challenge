// @flow

import React from 'react'
import styled, { keyframes } from 'styled-components'
import { Title } from '../kit/Layout'
import v from '../kit/variables'
import { CardType } from './Game.types'

const fadein = keyframes`
  from { opacity: 0; }
  to   { opacity: 1; }
`

const ModalContainer = styled.div`
  flex-flow: column nowrap;
  dsiplay: flex;
  animation: ${fadein} 1s;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  heigh: 100%;
  background: rebeccapurple;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
`

export const ModalTitle = Title.extend`
  flex: 0 0 200px;
`
export const ModalDetails = styled.div`
  flex: 1;
  display: flex;
  justfy-content: space-between;
`

export const PictureArea = styled.div`
  flex: 1;
  width: 50%;
  display: flex;
  padding: 20px;
  justify-content: center;
`

export const DescriptionArea = styled.div`
  flex: 1;
  width: 50%;
  display: flex;
  padding: 20px;
  color: ${v.foreColor};
`

const CardImage = styled.img`
  flex: 0;
  min-height: 300px;
`

const ModalCard = ({ card } : CardType) => (
  <ModalContainer>
    <ModalTitle>{card.name}</ModalTitle>
    <ModalDetails>
      <PictureArea><CardImage src={card.imageUrl} /></PictureArea>
      <DescriptionArea>{card.content}</DescriptionArea>
    </ModalDetails>
  </ModalContainer>
)

export default ModalCard
