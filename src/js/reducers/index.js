import { combineReducers } from 'redux';
import {
    FETCHING_DATA,
    RECEIVE_DATA
} from '../actions/actionsTypes';

function appState(state = null, action) {
    switch (action.type){
        case FETCHING_DATA:
            return Object.assign({}, state, {
                isLoading: action.isLoading
            });

        default:
            return state
    }
}

function tarot(state = null, action) {
    switch (action.type){
        case RECEIVE_DATA:
            return Object.assign({}, state, {
                data: action.data
            });

        default:
            return state
    }
}

export default combineReducers({
    appState,
    tarot,
});
