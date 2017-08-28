import React from 'react'
import styled from 'styled-components'
import v from  '../kit/variables'

const Button = styled.button`
  border: 1px solid ${v.primaryColor}
`

const INITIAL_GAME_STATE = 0

export const ControlButton = ({ gameState = INITIAL_GAME_STATE }) => {
  switch(gameState) {
    case INITIAL_GAME_STATE:
    default:
      return (<Button>Iniciar</Button>)
  }
}

const GameContainer = () => (
  <ControlButton />
)

export default GameContainer
