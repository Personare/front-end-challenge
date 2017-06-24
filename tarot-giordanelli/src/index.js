import React from 'react';
import ReactDOM from 'react-dom';
import CardList from './CardList';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<CardList ajax='https://raw.githubusercontent.com/Personare/front-end-challenge/master/tarot.json' />, document.getElementById('root'));
registerServiceWorker();
