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
  this.setState(DEFAULT_VALUE);
}

export function selectCard({name, image}) {
  if(this.state.status === GAME_STATUS.started) {
    this.setState({
      cardSelected: {name, image}
    });
  }
}

export const { Provider, Consumer } = React.createContext(DEFAULT_VALUE);
