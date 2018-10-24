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
        velocity: 4,
        scale: 2
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
    activeCard: false
  };

  shuffleCards = array => {
    return array
      .map(a => ({ sort: Math.random(), value: a }))
      .sort((a, b) => a.sort - b.sort)
      .map(a => a.value);
  };

  startGame = () => {
    this.setState({
      cards: this.shuffleCards(this.state.cards)
    });
  };

  onClickCard = name => {
    this.setState({ activeCard: name });
  };

  render() {
    const { activeCard, cards } = this.state;
    return (
      <div id="board">
        <div className="buttons">
          <button onClick={this.startGame}>Iniciar o jogo</button>
          <button onClick={this.resetGame}>Reiniciar jogo</button>
        </div>

        <div className="cards-grid">
          <PoseGroup>
            {cards.map(card => (
              <Item key={card.name}>
                <Card
                  isFliped={activeCard === card.name}
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
