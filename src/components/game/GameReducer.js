import * as actions from './GameActions'

const initialState = {}

// Handles image related actions
export default function (state = initialState, action) {
  switch (action.type) {
    case actions.TAROT.SUCCESS:
      return ({ ...state, tarot: action.tarot })
    default:
      return state
  }
}
