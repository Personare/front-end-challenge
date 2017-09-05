// @flow

import React, { Component } from 'react'
import styled from 'styled-components'
import v from  '../kit/variables'
import { ContentContainer } from '../kit/Layout'
import { connect } from 'react-redux'
import CardSet from './CardSet'
import ModalCard from './ModalCard'
import {
  gameStartAction,
  tarotRequestAction,
  selectCardAction,
} from './GameActions'
import { GAME_STATE } from './constants'

import type {
  GameStateType,
  CardListType,
  CardType,
  EventType,
} from './Game.types'

const Button = styled.button`
  border: 1px solid ${v.primaryColor}
`

export const l18n = {
  start: 'Iniciar',
  restart: 'Re-Iniciar',
  sorting: 'Embaralhando',
}

export const ControlButton = ({
  gameState = GAME_STATE.initial,
  handleStartClick,
  handleRestartClick,
} : GameStateType) => {
  switch(gameState) {
    case GAME_STATE.starting:
    case GAME_STATE.started:
    case GAME_STATE.showSelected:
      return (<Button onClick={handleRestartClick}>{l18n.restart}</Button>)
    case GAME_STATE.sorting:
      return (<div>{l18n.sorting}</div>)
    case GAME_STATE.initial:
    default:
      return (<Button onClick={handleStartClick}>{l18n.start}</Button>)
  }
}

// Game Component Isolation
type GameProps = {
  gameState: GameStateType,
  handleStartClick: () => void,
  handleCardSelect: () => void,
  cards?: CardListType,
  selectedCard?: CardType,
}

const cardSetShouldFlip = (gameState : GameStateType) => [
  GAME_STATE.starting,
  GAME_STATE.sorting,
  GAME_STATE.started,
].indexOf(gameState) !== -1

const cardSetShouldShuffle = (gameState : GameStateType) =>
  GAME_STATE.sorting === gameState

const cardSetShouldSelectOne = (gameState : GameStateType) =>
  GAME_STATE.started === gameState

export const Game = ({
  gameState = GAME_STATE.initial,
  handleStartClick,
  handleCardSelect,
  cards,
  selectedCard,
} : GameProps) => (
  <ContentContainer>
    <ControlButton
      gameState={gameState}
      handleStartClick={handleStartClick}
    />
    <CardSet
      cards={cards}
      flip={cardSetShouldFlip(gameState)}
      shuffle={cardSetShouldShuffle(gameState)}
      selectable={cardSetShouldSelectOne(gameState)}
      onSelect={handleCardSelect}
    />
    { selectedCard? <ModalCard card={selectedCard} /> : null }
  </ContentContainer>
)

// GameContainer
type Props = {
  tarot: CardListType,
  gameState: GameStateType,
  selectedCard?: CardType,
  tarotRequestAction: () => void,
  gameStartAction: () => void,
  selectCardAction: (card: CardType) => void,
}

type State = {}

export class GameContainer extends Component<Props, State> {

  state = {}

  componentDidMount() {
    return this.props.tarotRequestAction()
  }

  handleStartClick = () => {
    return this.props.gameStartAction()
  }

  handleCardSelect = (e: EventType, card: CardType) => {
    return this.props.selectCardAction(card)
  }

  render = () => (
    <Game
      gameState={this.props.gameState}
      handleStartClick={this.handleStartClick}
      handleCardSelect={this.handleCardSelect}
      cards={this.props.tarot}
      selectedCard={this.props.selectedCard}
    />
  )

}

// redux integration
const mapsToProps = ({
  game: { tarot, gameState, selectedCard }
}) => ({ tarot, gameState, selectedCard })

export default connect(mapsToProps, {
  tarotRequestAction,
  gameStartAction,
  selectCardAction,
})(GameContainer)
