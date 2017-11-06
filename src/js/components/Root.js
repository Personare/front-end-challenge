import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, browserHistory } from 'react-router-dom';
import App from './App';

const Root = ({ store }) => (
    <Provider store={store}>
        <BrowserRouter hystory={browserHistory}>
            <Route path='/' exact component={App} />
        </BrowserRouter>
    </Provider>
);

export default Root;
