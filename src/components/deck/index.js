import React from 'react';
import Card from './card';
import { getCardInfos } from '../../api/cards';
import './index.css';
import { GAME_STATUS, Consumer, DECK_STATUS } from '../game-context';


class Deck extends React.Component {
  render() {
    return (
      <Consumer>
        {
          ({ status, deckStatus, cards }) => (
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
  }
}

export default Deck;
