import React from 'react';

import './index.css';
import ButtonStart from '../buttons/start';
import Deck from '../deck';
import Modal from '../modal';
import { startGame, resetGame } from '../game-context/actions/game';
import { setInitialCards, isShuffling, selectCard } from '../game-context/actions/cards';
import { Provider, DEFAULT_VALUE, GAME_STATUS } from '../game-context';
import CardImage from '../deck/card/image';
import Title from '../title';
import ModalHeader from '../modal/header';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      ...DEFAULT_VALUE,
    };

    this.actions = {
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
    if (this.state.status === GAME_STATUS.off && prevStates.status !== this.state.status) {
      this.setInitialCards();
    }
  }

  render() {
    return (
      <Provider value={{ ...this.state, ...this.actions }}>
        <div className="app">
          <Deck />
          {
            this.state.status === GAME_STATUS.started &&
            <Title title="Pick up a card" />
          }
          <ButtonStart />
        </div>
        {
          this.state.cardSelected &&
          <Modal title={this.state.cardSelected.name}>
            <div className="modal-content-child">
              <CardImage {...this.state.cardSelected} />
            </div>
            <div className="modal-content-child">
              <ModalHeader title={this.state.cardSelected.name} />
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
