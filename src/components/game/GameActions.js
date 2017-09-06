import { createRequestTypes } from '../../actions/action-types'
import { GAME_STATE } from './constants'

// TAROT sec
export const TAROT = createRequestTypes('TAROT')
TAROT.UPDATE = 'TAROT_UPDATE'

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

// Card sec
export const CARD_SELECTED = 'CARD_SELECTED'

export const selectCardAction = (card) => ({
  type: CARD_SELECTED,
  card,
})
