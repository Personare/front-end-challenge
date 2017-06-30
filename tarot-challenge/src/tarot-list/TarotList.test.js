import React from 'react';
import ReactDOM from 'react-dom';
import TarotList from './TarotList';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TarotList/>, div);
});
