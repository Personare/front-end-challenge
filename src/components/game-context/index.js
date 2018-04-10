import React from 'react';

export const GAME_STATUS = {
  started: 'started',
  off: 'off',
};

export const DECK_STATUS = {
  shuffled: false,
  isShuffling: false,
};

export const DEFAULT_VALUE = {
  status: GAME_STATUS.off,
  cardSelected: null,
  cards: [],
  deckStatus: { ...{}, ...DECK_STATUS },
};

export const { Provider, Consumer } = React.createContext(DEFAULT_VALUE);
