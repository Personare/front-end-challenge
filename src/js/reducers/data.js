import {
    FETCHING_DONE,
    FLIP_ALL_CARDS,
    FLIP_CARD,
    CHANGE_CARDS
} from '../actions/actionsTypes';

export function data(state = {}, action) {
    switch (action.type) {
        case FETCHING_DONE:
            return {
                ...action.cards
            };

        case FLIP_ALL_CARDS:
            return {
                ...state,
                cards: [
                    ...state.cards.map(card => {
                        let newCard = {
                            ...card,
                            flipped: action.isFlipped
                        }

                        return newCard;
                    })
                ]
            };

        case FLIP_CARD:
            return {
                ...state,
                cards: [
                    ...state.cards.map((card, index) => {
                        if(index === action.cardId) {
                            return {
                                ...card,
                                flipped: false
                            }
                        }

                        return { ...card };
                    })
                ]
            };

        case CHANGE_CARDS:
            return {
                ...state,
                cards: action.cards
            };

        default:
            return state
    }
}
