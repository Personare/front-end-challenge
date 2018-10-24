import React, { Component } from "react";
import posed, { PoseGroup } from "react-pose";
import shuffle from "./shuffle";

// services
import tarot from "./services/tarot.json";

// components
import Card from "./components/Card";

const Item = posed.div({
  flip: {
    transition: {
      scale: {
        type: "spring",
        velocity: 4
      },
      default: {
        type: "spring"
      }
    }
  }
});

class App extends Component {
  state = {
    cards: tarot.cards || [],
    activeCard: false,
    gameIsStarted: false
  };

  shuffleCards = array => {
    return array
      .map(a => ({ sort: Math.random(), value: a }))
      .sort((a, b) => a.sort - b.sort)
      .map(a => a.value);
  };

  startGame = () => {
    this.setState({ gameIsStarted: true });
    setTimeout(() => {
      this.setState({
        cards: this.shuffleCards(this.state.cards)
      });
    }, 1000);
  };

  resetGame = () => {
    this.setState({
      activeCard: false,
      gameIsStarted: false
    });
  };

  onClickCard = name => {
    if (this.state.gameIsStarted) {
      this.setState({ activeCard: name });
    } else {
      alert("Rapaz, primeiro vamos começar o jogo");
    }
  };

  handleCloseCard = () => {
    this.setState({ activeCard: false });
  };

  render() {
    const { activeCard, cards, gameIsStarted } = this.state;
    return (
      <div id="board">
        <div
          className="modal-background"
          hidden={!activeCard}
          onClick={this.handleCloseCard}
        />

        <div className="buttons">
          <button onClick={this.startGame} hidden={gameIsStarted}>
            Iniciar o jogo
          </button>
          <button onClick={this.resetGame} hidden={!gameIsStarted}>
            Reiniciar jogo
          </button>
        </div>

        <div className="cards-grid">
          <PoseGroup>
            {cards.map(card => (
              <Item key={card.name}>
                <Card
                  isFliped={activeCard === card.name || !gameIsStarted}
                  isSelected={activeCard === card.name}
                  onClick={() => this.onClickCard(card.name)}
                  key={card.image}
                  {...card}
                />
              </Item>
            ))}
          </PoseGroup>
        </div>
      </div>
    );
  }
}

export default App;
