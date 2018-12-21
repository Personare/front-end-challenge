import { combineReducers } from 'redux'

import tarotCards from './tarotCards'
import isLoading from './isLoading'
import isShuffle from './isShuffle'

export default combineReducers({
  tarotCards,
  isLoading,
  isShuffle,
})
