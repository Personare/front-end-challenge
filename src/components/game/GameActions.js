import { createRequestTypes } from '../../actions/action-types'
import { GAME_STATE } from './constants'

// TAROT sec
export const TAROT = createRequestTypes('TAROT')

export const tarotRequestAction = () => ({
  type: TAROT.REQUEST
})

// GAME sec
export const GAME = {
  START: 'GAME_START',
  CHANGE_STATE: 'GAME_CHANGE_STATE',
}

export const gameStartAction = () => ({
  type: GAME.START,
  gameState: GAME_STATE.starting,
})
