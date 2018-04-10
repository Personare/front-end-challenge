import React from 'react';
import Card from './card';
import './index.css';
import { Consumer } from '../game-context';


const Deck = () => (
  <Consumer>
    {
      ({ deckStatus, cards }) => (
        <div className={`deck ${deckStatus.isShuffling ? 'is-shuffling' : ''}`}>
          {
            cards.map((card, index) => (
              <Card {...card} key={Symbol(index).toString()} />
            ))
          }
        </div>
      )
    }
  </Consumer>
);

export default Deck;
