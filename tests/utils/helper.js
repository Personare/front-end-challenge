import React from 'react';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import game from 'reducers/game';

export const mockStore = (mock) => {
    const reducers = {
        game,
    };

    Object.keys(mock).forEach(key => {
        reducers[key] = (state, action) => (mock[key]);
    });

    return createStore(
        combineReducers(reducers),
    );
};

export const mountConnected = (component, store) => (
    mount(
        <Provider store={store}>
            {component}
        </Provider>
    )
);
