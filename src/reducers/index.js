import { combineReducers } from 'redux'

import tarotCards from './tarotCards'
import isLoading from './isLoading'
import isShuffle from './isShuffle'
import currentCard from './currentCard'

export default combineReducers({
  tarotCards,
  isLoading,
  isShuffle,
  currentCard,
})
