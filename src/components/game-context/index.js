import React from 'react';
import { getCardInfos } from '../../api/cards';

export const GAME_STATUS = {
  started: 'started',
  off: 'off'
};

export const DECK_STATUS = {
  shuffled: false,
  isShuffling: false
}

export const DEFAULT_VALUE = {
  status: GAME_STATUS.off,
  cardSelected: null,
  cards: [],
  deckStatus: { ...{}, ...DECK_STATUS }
};

export function startGame() {
  this.setState(prevState => ({
    status: GAME_STATUS.started,
    cards: shuffleCards(prevState.cards),
    deckStatus: {
      ...DECK_STATUS,
      isShuffling: true,
    }
  }));
  this.isShuffling();
}

export function resetGame() {
  this.setState(DEFAULT_VALUE);
}

export async function setInitialCards() {
  try {
    const infos = await getCardInfos();
    const { imageBackCard } = infos;
    this.setState({
      cards: infos.cards.map((card, index) => (
        {
          ...card,
          imageBackCard,
          image: `${infos.imagesUrl}${card.image}`
        }
      ))
    });
  } catch (error) {
    throw error;
  }
}

export function selectCard({ name, image }) {
  if (this.state.status === GAME_STATUS.started) {
    this.setState({
      cardSelected: { name, image }
    });
  }
}

export function shuffleCards(cards = []) {
  return cards
    .map(card => [Math.random(), card])
    .sort((card, nextCard) => card[0] - nextCard[0])
    .map(card => card[1])
};

export function isShuffling() {
  setTimeout(() => {
    this.setState({
      deckStatus: {
        shuffled: true,
        isShuffling: false
      }
    });
  }, 2000);
}

export const { Provider, Consumer } = React.createContext(DEFAULT_VALUE);
