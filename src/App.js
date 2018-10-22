import React, { Component } from "react";

// services
import tarot from "./services/tarot.json";

// components
import Board from "./components/Board";
import Card from "./components/Card";
import Deck from "./components/Deck";

class App extends Component {
  state = {
    isSorting: false,
    isSpreaded: false,
    isOpen: true,
    isOverview: true,
    cards: tarot.cards || [],
    activeCard: false
  };

  shuffleCards = () => {
    const shuffled = this.state.cards
      .map(a => ({ sort: Math.random(), value: a }))
      .sort((a, b) => a.sort - b.sort)
      .map(a => a.value);
    this.setState({ cards: shuffled });
  };

  startGame = () => {
    this.setState({
      isOpen: false,
      isOverview: false
    });
    this.shuffleCards();
    setTimeout(() => {
      this.setState({
        isSpreaded: true
      });
    }, 2500);
  };

  onClickCard = id => {
    this.setState({ activeCard: id });
  };

  render() {
    const { activeCard, cards } = this.state;
    return (
      <Board>
        <button onClick={this.startGame}>Iniciar o jogo</button>
        <Deck {...this.state}>
          {cards.map((card, index) => (
            <Card
              {...card}
              key={index}
              isFliped={activeCard === index}
              onClick={() => this.onClickCard(index)}
            />
          ))}
        </Deck>
      </Board>
    );
  }
}

export default App;
