// @flow

import React, { Component } from 'react'
import styled from 'styled-components'
import v from  '../kit/variables'
import { ContentContainer } from '../kit/Layout'
import { connect } from 'react-redux'
import CardSet from './CardSet'
import { tarotRequestAction } from './GameActions'
import { GAME_STATE } from './constants'

import type { GameStateType, CardListType} from './Game.types'

const Button = styled.button`
  border: 1px solid ${v.primaryColor}
`

export const ControlButton = ({ gameState = GAME_STATE.initial } : GameStateType) => {
  switch(gameState) {
    case GAME_STATE.initial:
    default:
      return (<Button>Iniciar</Button>)
  }
}

type Props = {
  tarot: CardListType,
  gameState: GameStateType,
  tarotRequestAction: () => void,
}

type State = {}

export class GameContainer extends Component<Props, State> {

  state = {}

  componentDidMount() {
    return this.props.tarotRequestAction()
  }

  render = () => (
    <ContentContainer>
      <ControlButton gameState={this.props.gameState} />
      <CardSet cards={this.props.tarot} />
    </ContentContainer>
  )

}

const mapsToProps = ({ game: { tarot, gameState } }) => ({ tarot, gameState })

export default connect(mapsToProps, { tarotRequestAction })(GameContainer)
