import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

import data from '../../assets/tarot.json';
import './Game.sass';

class Game extends Component {
  componentDidMount() {
    this.props.loadCards(data);
  }

  selectCard = (id) => {
    this.props.selectCard(id);
  }

  startGame = () => {
    this.props.startGame();
  }

  stopGame = () => {
    this.props.stopGame();
  }

  render() {
    return (
      <section className="Game">

      </section>
    );
  }
}

export default connect(null, actions)(Game);
