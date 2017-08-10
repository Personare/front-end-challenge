import React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import configureStore from './configureStore';
import routes from './routes';
import baseHistory from './history';

// create store and wrapped history
const { store, history } = configureStore(baseHistory, window.__INITIAL_STATE__); // eslint-disable-line

export default () => { // eslint-disable-line
    return (
        <Provider store={store}>
            <Router history={history} routes={routes} />
        </Provider>
    );
};
