import { combineReducers } from 'redux';
import { game, gameState } from './game';
import { tipState } from './tip';
import {
    FETCHING_DATA,
    CHANGE_GRID_COL,
    CHANGE_STEP
} from '../actions/actionsTypes';

const initialState = {
    isLoading: false,
    gridCols: 6,
    step: []
}

function appState(state = initialState, action) {
    switch (action.type){
        case FETCHING_DATA:
            return Object.assign({}, state, {
                isLoading: action.isLoading
            });

        case CHANGE_STEP:
            let stepValue = action.step === 'clean' ? [] : [...state.step, action.step];

            return Object.assign({}, state, {
                step: stepValue
            });

        default:
            return state
    }
}

export default combineReducers({
    appState,
    gameState,
    tipState,
    game
});
