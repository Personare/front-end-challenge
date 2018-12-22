import { createStore } from 'redux'

import reducers from '../reducers'
import middlewares from './middlewares'

const initialState = {}

export default createStore(reducers, initialState, middlewares)