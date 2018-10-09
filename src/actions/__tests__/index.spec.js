import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import { fetchTarot } from '../index';
import { FETCH_TAROT_REQUEST, FETCH_TAROT_SUCCESS } from '../actionTypes';

const mockStore = configureMockStore([thunk]);

const data = {
    imagesUrl: '',
    imageBackCard: '',
    cards: []
};

describe('fetchTarot action', () => {
    beforeEach(() => {
        moxios.install();
    });

    afterEach(() => {
        moxios.uninstall();
    });

    it('should calls expectedActions with the result of fetchTarot', () => {
        moxios.wait(() => {
            const req = moxios.requests.mostRecent();

            req.respondWith({
                status: 200,
                response: data
            });
        });

        const expectedActions = [
            {
                type: FETCH_TAROT_REQUEST
            },
            {
                type: FETCH_TAROT_SUCCESS,
                payload: data
            }
        ];

        const store = mockStore({});

        return store.dispatch(fetchTarot()).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    });
});
