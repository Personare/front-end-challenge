import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TarotList from './tarot-list/TarotList';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<TarotList />, document.getElementById('card-list'));
registerServiceWorker();
