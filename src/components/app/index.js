import React from 'react';

import './index.css';
import ButtonStart from '../buttons/start';
import Deck from '../deck';
import { Provider, DEFAULT_VALUE, startGame, resetGame, selectCard } from '../game-context';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      ...DEFAULT_VALUE,
      startGame: startGame.bind(this),
      resetGame: resetGame.bind(this),
      selectCard: selectCard.bind(this)
    };
  }

  render() {
    return (
      <Provider value={this.state}>
        <div className="app">
          <Deck status={this.state.status}/>
          <ButtonStart />
        </div>
      </Provider>
    );
  }
}

export default App;
