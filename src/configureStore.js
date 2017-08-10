import { createStore, applyMiddleware, compose } from 'redux';
import { syncHistoryWithStore, routerMiddleware } from 'react-router-redux';
import promiseMiddleware from 'redux-promise-middleware';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

export default function configureStore(baseHistory, initialState) {
    const routingMiddleware = routerMiddleware(baseHistory);

    const finalCreateStore = compose(
        applyMiddleware(routingMiddleware, thunk, promiseMiddleware()),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    )(createStore);

    const store = finalCreateStore(rootReducer, initialState);
    const history = syncHistoryWithStore(baseHistory, store);

    if (module.hot) {
        module.hot.accept('./reducers', () => {
            const nextReducer = require('./reducers'); // eslint-disable-line
            store.replaceReducer(nextReducer);
        });
    }

    return { store, history };
}
