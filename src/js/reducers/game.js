import { combineReducers } from 'redux';
import {
    FETCHING_PENDING,
    FETCHING_DONE,
    TOGGLE_DISABLE,
    CHANGE_ANIMATION_MODE,
    CHANGE_GRID_COL,
    CHANGE_GAME_START
} from '../actions/actionsTypes';

const initialGameState = {
    isLoading: true,
    gameStarted: false,
    animationMode: '',
    isDisable: false,
    gridCollumn: 6
};

export function gameState(state = initialGameState, action) {
    switch (action.type) {
        case FETCHING_PENDING:
            return {
                ...state,
                isLoading: true
            };

        case FETCHING_DONE:
            return {
                ...state,
                isLoading: false
            };

        case TOGGLE_DISABLE:
            return {
                ...state,
                isDisable: action.isDisable
            };

        case CHANGE_ANIMATION_MODE:
            return {
                ...state,
                animationMode: action.mode
            };

        case CHANGE_GRID_COL:
            return {
                ...state,
                gridCollumn: action.gridCols
            };

        case CHANGE_GAME_START:
            return {
                ...state,
                gameStarted: action.gameStarted
            };

        default:
            return state;
    }
}
