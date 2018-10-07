import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import Reducers from '../reducers';

const middleware = [thunk];

export const store = applyMiddleware(...middleware)(createStore)(Reducers);
