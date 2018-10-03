import { LOAD_CARDS, SELECT_CARD, START_GAME, STOP_GAME, SHUFFLE_GAME } from './types';

export const loadCards = (data) => ({
  type: LOAD_CARDS,
  payload: data,
});

export const setCard = (id) => ({
  type: SELECT_CARD,
  payload: { id },
});

export const start = () => ({ type: START_GAME });

export const stop = () => ({ type: STOP_GAME });

export const shuffle = () => ({ type: SHUFFLE_GAME });
