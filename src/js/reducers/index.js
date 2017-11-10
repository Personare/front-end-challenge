import { combineReducers } from 'redux';
import { data } from './data';
import { gameState } from './gameState';
import { tipState } from './tip';
import { modal } from './modal';

// all reducers
export default combineReducers({
    data,
    gameState,
    tipState,
    modal,
});
