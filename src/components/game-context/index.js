import React from 'react';

export const GAME_STATUS = {
  started: 'started',
  off: 'off'
};

export const DEFAULT_VALUE = {
  status: GAME_STATUS.off,
  cardSelected: null,
};

export function startGame() {
  this.setState({
    status: GAME_STATUS.started
  });
}

export function resetGame() {
  this.setState({
    status: GAME_STATUS.off
  });
}

export function selectCard({name, image}) {
  this.setState({
    cardSelected: {name, image}
  });
}

export const { Provider, Consumer } = React.createContext(DEFAULT_VALUE);
