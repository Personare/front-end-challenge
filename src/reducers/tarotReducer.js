import { FETCH_TAROT_SUCCESS } from '../actions/actionTypes';
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
        default:
            return state;
    }
};
