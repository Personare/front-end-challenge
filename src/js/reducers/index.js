import { combineReducers } from 'redux';
import { gameState } from './game';
import { data } from './data';
import { tipState } from './tip';
import { modal } from './modal';
import {
    FETCHING_DATA,
    CHANGE_GRID_COL,
    CHANGE_STEP
} from '../actions/actionsTypes';

// all reducers
export default combineReducers({
    data,
    gameState,
    tipState,
    modal,
});
