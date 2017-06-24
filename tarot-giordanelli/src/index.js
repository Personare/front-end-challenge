import React from 'react';
import ReactDOM from 'react-dom';
import CardList from './CardList';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<CardList />, document.getElementById('root'));
registerServiceWorker();
