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

class App extends Component {
  state = {
    something: ""
  };

  doSomething = () => {
    this.setState({ something: "was doing" });
  };

  render() {
    return (
      <Provider value={{ ...this }}>
        <Board>
          <Deck>
            {tarot.cards.slice(0, 1).map((card, index) => (
              <Card isFliped {...card} key={index} />
            ))}
          </Deck>
        </Board>
      </Provider>
    );
  }
}

export default App;
