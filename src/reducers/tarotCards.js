import { TAROT_CARDS_SUCCESS, TAROT_CARDS_FAIL } from '../action-types'

export default (state = {}, action) => {
  switch (action.type) {
    case TAROT_CARDS_SUCCESS:
      return {
        ...state,
        ...action.payload,
      }

    case TAROT_CARDS_FAIL:
      return { error: action.payload }

    default:
      return state
  }
}
