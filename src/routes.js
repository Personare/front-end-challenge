import React from 'react';
import { Route } from 'react-router';
import { HelloWord } from 'views/HelloWord';

export default (
    <Route>
        <Route path="/" component={HelloWord} />
    </Route>
);
