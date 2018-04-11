import React from 'react';

import { Consumer } from '../../game-context';
import './index.css';

const ButtonReset = () => (
  <Consumer>
    {
      ({ resetGame }) => (
        <button className="button-reset" onClick={resetGame}>
          Play Again
        </button>
      )
    }
  </Consumer>
);

export default ButtonReset;
