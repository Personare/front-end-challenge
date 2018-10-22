import React, { Component } from "react";

// services
import tarot from "./services/tarot.json";

// context
import context from "./context";

// components
import Board from "./components/Board";
import Card from "./components/Card";
import Deck from "./components/Deck";

const { Provider } = context;

const wait = fn => {
  setTimeout(fn, 1500);
};

class App extends Component {
  state = {
    isSorting: false,
    isSpreaded: false,
    isOpen: true,
    isOverview: true,
    cards: tarot.cards || [],
    activeCard: false
  };

  render() {
    const { activeCard, cards } = this.state;
    return (
      <Board>
        <Deck {...this.state}>
          {cards.map((card, index) => (
            <Card {...card} key={index} isFliped={activeCard === index} />
          ))}
        </Deck>
      </Board>
    );
  }
}

export default App;
