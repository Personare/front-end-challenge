import { combineReducers } from 'redux'
import game from '../components/game/GameReducer'

const rootReducer = combineReducers({
  game
})

export default rootReducer
