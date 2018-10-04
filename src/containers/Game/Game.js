import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import TweenMax from 'gsap';
import * as actions from '../../actions';

import data from '../../assets/tarot.json';
import Card from '../../components/Card/Card';
import GameMenu from '../../components/GameMenu/GameMenu';
import './Game.sass';

class Game extends Component {
  componentDidMount() {
    this.props.loadCards(data);
    setTimeout(() => console.log(this.props), 1000)
  }

  selectCard = (id) => {
    this.props.selectCard(id);
  }

  startGame = () => {
    this.props.startGame();
    TweenMax.staggerTo('.CardContent', 1, { rotationY: -180 }, 0.01, () => {
      this.props.shuffleGame();
    });
  }

  stopGame = () => {
    this.props.stopGame();
    TweenMax.staggerTo('.CardContent', 1, { rotationY: 0 }, 0.01);
  }

  render() {
    return (
      <Fragment>
        <GameMenu
          play={this.props.game.play}
          start={() => this.startGame()}
          stop={() => this.stopGame()} />
        <section className="Game">
          {
            this.props.game.order.map(id => <Card 
              key={id}
              card={this.props.game.cards[id].image}
              imageBack={this.props.game.cards[id].imageBackCard}
              click={() => this.selectCard(id)}
              selected={this.props.game.play && this.props.game.selected === id}
            />)
          }
        </section>
      </Fragment>
    );
  }
}

const mapStateToProps = ({ game }) => {
  return { game };
}

export default connect(mapStateToProps, actions)(Game);
