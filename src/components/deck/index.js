import React from 'react';
import Card from './card';
import { getCardInfos } from '../../api/cards';
import './index.css';
import { GAME_STATUS } from '../game-context';


class Deck extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [],
      status: props.status,
      isShuffling: false,
      shuffled: false
    };

    this.shuffleCards = (cards = []) => {
      this.isShuffling();
      return cards
        .map(card => [Math.random(), card])
        .sort((card, nextCard) => card[0] - nextCard[0])
        .map(card => card[1])
    };

    this.isShuffling = () => {
      this.setState(prevState => ({ isShuffling: !prevState.isShuffling }));

      setTimeout(() => {
        this.setState(prevState => ({ isShuffling: !prevState.isShuffling,  shuffled: !prevState.shuffled }));
      }, 2000);
    };
  }

  componentDidMount() {
    getCardInfos().then((infos) => {
      const { imageBackCard } = infos;
      this.setState({
        cards: infos.cards.map((card, index) => (
          {
            ...card,
            imageBackCard,
            image: `${infos.imagesUrl}${card.image}`
          }
        ))
      });
    });
  }

  componentDidUpdate(prevProps, prevStates, snapshot) {
    if(this.props.status === GAME_STATUS.started && this.props.status !== prevProps.status && !this.state.shuffled) {
      this.setState(prevState => ({
        cards: this.shuffleCards(prevState.cards)
      }));
    }
  }

  render() {
    return (
      <div className={`deck ${this.state.isShuffling ? 'is-shuffling' : ''}`}>
        {
          this.state.cards.map((card, index) => (
            <Card {...card} key={Symbol(index).toString()} />
          ))
        }
      </div>
    );
  }
}

export default Deck;
