import React from 'react';

import './index.css';
import ButtonStart from '../buttons/start';
import Deck from '../deck';
import Modal from '../modal';
import { Provider, DEFAULT_VALUE, startGame, resetGame, selectCard } from '../game-context';
import CardImage from '../deck/card/image';

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
        {
          !this.state.cardSelected &&
          <div className="app">
            <Deck status={this.state.status}/>
            <ButtonStart />
          </div>
        }
        {
          this.state.cardSelected &&
          <Modal title={this.state.cardSelected.name}>
            <div>
              <CardImage {...this.state.cardSelected} />
            </div>
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Ullam sint voluptas,
              dignissimos beatae distinctio sed doloribus dolore
              recusandae dolorum hic quo ipsam doloremque
              fugit labore eligendi impedit
              placeat odio odit!
            </div>
          </Modal>
        }
      </Provider>
    );
  }
}

export default App;
