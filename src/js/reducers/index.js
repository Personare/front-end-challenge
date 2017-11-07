import { combineReducers } from 'redux';
import {
    FETCHING_DATA,
    RECEIVE_DATA,
    CHANGE_GRID_COL
} from '../actions/actionsTypes';

function appState(state = null, action) {
    switch (action.type){
        case FETCHING_DATA:
            return Object.assign({}, state, {
                isLoading: action.isLoading
            });

        case CHANGE_GRID_COL:
            return Object.assign({}, state, {
                gridCols: action.gridCols
            });

        default:
            return state
    }
}

function tarot(state = null, action) {
    switch (action.type){
        case RECEIVE_DATA:
            return Object.assign({}, state, {
                imagesUrl: action.data.imagesUrl,
                imageBackCard: action.data.imageBackCard,
                cards: action.data.cards,
            });

        default:
            return state
    }
}

export default combineReducers({
    appState,
    tarot
});
