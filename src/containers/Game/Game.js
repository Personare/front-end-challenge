import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import TweenMax from 'gsap';
import * as actions from '../../actions';

import data from '../../assets/tarot.json';
import Card from '../../components/Card/Card';
import GameMenu from '../../components/GameMenu/GameMenu';
import SelectedCard from '../SelectedCard/SelectedCard';
import './Game.styl';

export class Game extends Component {
  componentDidMount() {
    this.props.loadCards(data);
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
          stop={() => this.stopGame()}
        />
        <section className="Game">
          {
            this.props.game.order.map(id => (
              <Card
                key={id}
                card={this.props.game.cards[id].image}
                imageBack={this.props.game.cards[id].imageBackCard}
                click={() => this.selectCard(id)}
                selected={this.props.game.play && this.props.game.selected === id}
              />
            ))
          }
        </section>
        <SelectedCard />
      </Fragment>
    );
  }
}

Game.propTypes = {
  loadCards: PropTypes.func,
  selectCard: PropTypes.func,
  startGame: PropTypes.func,
  shuffleGame: PropTypes.func,
  stopGame: PropTypes.func,
  game: PropTypes.shape({
    play: PropTypes.bool,
    cards: PropTypes.object,
    order: PropTypes.array,
    selected: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.number,
    ]),
  }),
};

const mapStateToProps = ({ game }) => ({ game });

export default connect(mapStateToProps, actions)(Game);
