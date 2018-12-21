import { TAROT_CARDS_SUCCESS, TAROT_CARDS_FAIL } from '../action-types'

const initialState = {
  imagesUrl: '',
  imageBackCard: '',
  cards: [],
}

export default (state = initialState, action) => {
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
