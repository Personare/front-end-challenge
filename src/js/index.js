import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import reducer from './reducers';
import { getAllCards } from './actions/api';
import App from './containers/App';

require('../stylus/app.styl');

const notProducion = process.env.NODE_ENV !== 'production' ? true : false;

const middleware = [ thunk ];
if (notProducion) {
    middleware.push(createLogger());
}

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(...middleware)
);

store.dispatch(getAllCards());

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
);
