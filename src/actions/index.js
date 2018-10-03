import { LOAD_CARDS, SELECT_CARD, START_GAME, STOP_GAME, SHUFFLE_GAME } from './types';

export const loadCards = (data) => ({
  type: LOAD_CARDS,
  payload: data,
});

export const selectCard = (id) => ({
  type: SELECT_CARD,
  payload: { id },
});

export const startGame = () => ({ type: START_GAME });

export const stopGame = () => ({ type: STOP_GAME });

export const shuffleGame = () => ({ type: SHUFFLE_GAME });
