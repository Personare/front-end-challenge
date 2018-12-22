import {
  TAROT_CARDS_SUCCESS,
  TAROT_CARDS_FAIL,
  TAROT_CARDS_SHUFFLE,
} from '../action-types'

const initialState = {
  imagesUrl: '',
  imageBackCard: '',
  cards: [],
}

export default (state = initialState, action) => {
  switch (action.type) {
    case TAROT_CARDS_SUCCESS:
      return action.payload

    case TAROT_CARDS_SHUFFLE:
      return {
        ...state,
        cards: action.payload,
      }

    case TAROT_CARDS_FAIL:
      return {
        ...initialState,
        error: action.payload,
      }

    default:
      return state
  }
}
