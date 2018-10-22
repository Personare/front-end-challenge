import React, { Component } from "react";

// services
import Tarot from "./services/tarot";

// context
import context from "./context";

// components
import Board from "./components/Board";

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
        <Board />
      </Provider>
    );
  }
}

export default App;
