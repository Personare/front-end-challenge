import React from 'react';

import './index.css';
import ButtonStart from '../buttons/start';
import Deck from '../deck';
import Modal from '../modal';
import { Provider, DEFAULT_VALUE, startGame, resetGame, selectCard, setInitialCards, isShuffling, GAME_STATUS } from '../game-context';
import CardImage from '../deck/card/image';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ...DEFAULT_VALUE,
      startGame: startGame.bind(this),
      resetGame: resetGame.bind(this),
      selectCard: selectCard.bind(this),
    };

    this.setInitialCards = setInitialCards.bind(this);
    this.isShuffling = isShuffling.bind(this);
  }

  componentDidMount() {
    this.setInitialCards();
  }

  componentDidUpdate(prevProps, prevStates) {
    if(this.state.status === GAME_STATUS.off && prevStates.status !== this.state.status) {
      this.setInitialCards();
    }
  }

  render() {
    return (
      <Provider value={this.state}>
        {
          !this.state.cardSelected &&
          <div className="app">
            <Deck />
            <ButtonStart />
          </div>
        }
        {
          this.state.cardSelected &&
          <Modal title={this.state.cardSelected.name}>
            <div className="modal-content-child">
              <CardImage {...this.state.cardSelected} />
            </div>
            <div className="modal-content-child">
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
