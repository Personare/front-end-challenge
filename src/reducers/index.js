import { combineReducers } from 'redux'

import tarotCards from './tarotCards'
import isLoading from './isLoading'

export default combineReducers({
  tarotCards,
  isLoading,
})
