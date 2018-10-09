import * as types from '../actions/actionTypes';
import { getNewState } from '../shared/utils/frontend';

const initialState = {
    imagesUrl: '',
    imageBackCard: '',
    cards: [],
    isClosed: false
};

export const tarotReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.FETCH_TAROT_SUCCESS:
            const { payload } = action;
            return getNewState(state, payload);
        case types.SORT_CARDS:
            const cards = state.cards.slice().sort(() => 0.5 - Math.random());
            return getNewState(state, { cards });
        case types.CLOSE_CARDS:
            const isClosed = true;
            return getNewState(state, { isClosed });
        default:
            return state;
    }
};
