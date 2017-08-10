import React from 'react';
import { Route } from 'react-router';
import Game from 'containers/Game';

export default (
    <Route>
        <Route path="/" component={Game} />
    </Route>
);
