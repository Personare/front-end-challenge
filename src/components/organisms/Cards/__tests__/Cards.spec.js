import React from 'react';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';

import { fetchTarot } from '../../../../actions';

import Cards from '../index';

const mockInitialState = {
    tarotReducer: {
        imagesUrl: 'https://path.net/',
        imageBackCard: 'back-blue-card.png',
        cards: [{}, {}, {}]
    }
};

const mockStore = configureStore()(mockInitialState);

jest.mock('../../../../actions', () => ({
    fetchTarot: jest.fn().mockReturnValue({ type: 'mock-FETCH_TAROT_SUCCESS' })
}));

describe('Cards', () => {
    let mockParams;
    let wrapper;

    beforeEach(() => {
        fetchTarot.mockClear();
        mockParams = {};
        mockStore.clearActions();
        wrapper = shallow(<Cards {...mockParams} store={mockStore} />);
    });

    it('should dispatch fetchCards', () => {
        const { fetchTarot } = wrapper.props();

        fetchTarot();

        const actions = mockStore.getActions();

        expect(actions).toEqual([{ type: 'mock-FETCH_TAROT_SUCCESS' }]);
    });
});
