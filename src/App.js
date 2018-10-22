import React from "react";
import Tarot from "./services/tarot";

import context from "./context";

const { Provider } = context;

class App extends Component {
  state = {};

  doSomething = () => {
    console.log("something was doing");
  };

  render() {
    return (
      <Provider value={{ ...this }}>
        <h1>App</h1>
      </Provider>
    );
  }
}

export default App;
