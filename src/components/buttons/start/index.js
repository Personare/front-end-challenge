import React from 'react';
import './index.css';
import { Consumer, GAME_STATUS } from '../../game-context';

const ButtonStart = () => (
  <Consumer>
    {
      ({ status, startGame }) => (
        status === GAME_STATUS.off && (
          <button className="button-start" onClick={startGame}>
            Play Tarot
          </button>
        )
      )
    }
  </Consumer>
);

export default ButtonStart;
