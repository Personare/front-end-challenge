import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Layout from './containers/Layout/Layout';
import Game from './containers/Game/Game';
import CardList from './containers/CardList/CardList';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Layout>
          <Route exact path="/" component={Game} />
          <Route exact path="/cartas" component={CardList} />
        </Layout>
      </BrowserRouter>
    );
  }
}

export default App;
