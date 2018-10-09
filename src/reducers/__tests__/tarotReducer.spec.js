import { tarotReducer } from '../tarotReducer';
import { FETCH_TAROT_SUCCESS, SORT_CARDS } from '../../actions/actionTypes';
import { types } from 'util';

const initialState = {
    imagesUrl: '',
    imageBackCard: '',
    cards: [],
    isClosed: false
};

describe('tarotReducer', () => {
    it('should return the initial state', () => {
        const expectedInitialState = tarotReducer(undefined, {});
        expect(expectedInitialState).toEqual(initialState);
    });

    it('should sets state to data', () => {
        const data = {
            imagesUrl: 'http://root/',
            imageBackCard: 'back.jpg',
            cards: [{}, {}, {}],
            isClosed: false
        };

        const action = {
            type: FETCH_TAROT_SUCCESS,
            payload: data
        };

        const expectedState = action.payload;

        const state = tarotReducer(initialState, action);

        expect(state).toEqual(expectedState);
    });

    it('should sets state with shuffle cards', () => {
        const action = { type: SORT_CARDS };

        const cards = [1, 2, 3, 4, 5];

        const state = tarotReducer({ cards }, action);

        expect(state.cards).not.toBe(cards);
    });

    it('should change isClosed on state for true', () => {
        const action = { type: types.CLOSE_CARDS };

        const isClosed = true;

        const state = tarotReducer({ isClosed }, action);

        expect(state.isClosed).toBe(isClosed);
    });
});
