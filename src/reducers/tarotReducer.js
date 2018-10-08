import { FETCH_TAROT_SUCCESS, SORT_CARDS } from '../actions/actionTypes';
import { getNewState } from '../shared/utils/frontend';

const initialState = {
    imagesUrl: '',
    imageBackCard: '',
    cards: []
};

export const tarotReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_TAROT_SUCCESS:
            const { payload } = action;
            return getNewState(state, payload);
        case SORT_CARDS:
            const cards = state.cards.slice().sort(() => 0.5 - Math.random());
            return getNewState(state, { cards });
        default:
            return state;
    }
};
