import { shuffleCards } from './cards';
import { GAME_STATUS, DEFAULT_VALUE, DECK_STATUS } from '..';

export function startGame() {
  this.setState(prevState => ({
    status: GAME_STATUS.started,
    cards: shuffleCards(prevState.cards),
    deckStatus: {
      ...DECK_STATUS,
      isShuffling: true,
    },
  }));
  this.isShuffling();
}

export function resetGame() {
  this.setState(DEFAULT_VALUE);
}
