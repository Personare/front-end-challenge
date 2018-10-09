import { combineReducers } from 'redux';
import { tarotReducer } from './tarotReducer';

const rootReducer = combineReducers({ tarotReducer });

export default rootReducer;
