// @flow

import * as actions from './GameActions'
import type { GameStateType, CardListType, CardType } from './Game.types'
import { GAME_STATE } from './constants'

type StateType = {
  gameState: GameStateType,
  tarot?: CardListType,
  selectedCard?: CardType,
}

type ActionType = {
  type: string,
  gameState?: GameStateType,
  tarot?: CardListType,
  card?: CardType,
}

export const initialState = {
  gameState: GAME_STATE.initial,
}

// Handles game related actions
export default function (state : StateType = initialState, action : ActionType) {
  switch (action.type) {
    case actions.GAME.CHANGE_STATE:
      return ({ ...state, gameState: action.gameState })
    case actions.TAROT.SUCCESS:
    case actions.TAROT.UPDATE:
      return ({ ...state, tarot: action.tarot })
    case actions.CARD_SELECTED:
      return ({ ...state, selectedCard: action.card })
    default:
      return state
  }
}
