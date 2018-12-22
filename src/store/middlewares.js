import { applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

const middlewares = applyMiddleware(thunk)

export default composeWithDevTools(middlewares)