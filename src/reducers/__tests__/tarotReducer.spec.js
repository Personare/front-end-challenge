import { tarotReducer } from '../tarotReducer';
import { FETCH_TAROT_SUCCESS } from '../../actions/actionTypes';

const initialState = {
    imagesUrl: '',
    imageBackCard: '',
    cards: []
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
            cards: [{}, {}, {}]
        };

        const action = {
            type: FETCH_TAROT_SUCCESS,
            payload: data
        };

        const expectedState = action.payload;

        const state = tarotReducer(initialState, action);

        expect(state).toEqual(expectedState);
    });
});
