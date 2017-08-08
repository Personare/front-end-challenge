import { AppContainer } from 'react-hot-loader';
import React from 'react';
import ReactDOM from 'react-dom';
import Root from './root';

import './styles/style.styl';
import { PAGE } from './constants';

ReactDOM.render(
    <AppContainer>
        <Root />
    </AppContainer>,
PAGE);

if (module.hot) {
    module.hot.accept('./root', () => {
        const NextApp = require('./root').default; // eslint-disable-line
        ReactDOM.render(
            <AppContainer>
                <NextApp />
            </AppContainer>,
            PAGE
        );
    });
}
