// @flow

import * as actions from './GameActions'
import type { GameStateType, CardListType } from './Game.types'
import { GAME_STATE } from './constants'

type StateType = {
  gameState: GameStateType,
  tarot?: CardListType,
}

type ActionType = {
  type: string,
  tarot?: CardListType,
}

export const initialState = {
  gameState: GAME_STATE.initial,
}

// Handles game related actions
export default function (state : StateType = initialState, action : ActionType) {
  switch (action.type) {
    case actions.TAROT.SUCCESS:
      return ({ ...state, tarot: action.tarot })
    default:
      return state
  }
}
