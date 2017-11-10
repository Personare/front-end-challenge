import { combineReducers } from 'redux';

import {
    RECEIVE_DATA,
    FLIP_CARD,
    FLIP_ALL_CARDS,
    CHANGE_CARDS,

    TOGGLE_DISABLE,
    CHANGE_ANIMATION_MODE,
    CHANGE_GRID_COL,
    CHANGE_GAME_START
} from '../actions/actionsTypes';

export function game(state = null, action) {
    switch (action.type){
        case RECEIVE_DATA:
            return Object.assign({}, state, {
                imagesUrl: action.data.imagesUrl,
                imageBackCard: action.data.imageBackCard,
                cards: action.data.cards,
            });

        case FLIP_CARD:
            return {
                ...state,
                cards: state.cards.map( (card, index) => {
                    return index === action.cardId ?
                    { ...card, flipped: false }:
                    card
                })
            };

        case FLIP_ALL_CARDS:
            let newState = Object.assign({}, state, {
                cards: action.newCards
            });
            return newState;

        case CHANGE_CARDS:
            return {
                ...state,
                cards: action.cards
            };

        default:
            return state
    }
}


const initialGameState = {
    isLoading: true,
    gameStarted: false,
    animationMode: '',
    isDisable: false,
    gridCollumn: 6
};

export function gameState(state = initialGameState, action) {
    switch (action.type) {
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
