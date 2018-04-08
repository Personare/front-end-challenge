import React from 'react';
import Card from './card';
import { getCardInfos } from '../../api/cards';
import './index.css';


class Deck extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: []
    };
  }

  componentDidMount() {
    getCardInfos().then((infos) => {
      const { imageBackCard } = infos;
      this.setState({
        cards: infos.cards.map((card, index) => {
          const cardProps = { ...card, imageBackCard, image: `${infos.imagesUrl}${card.image}` };
          return <Card {...cardProps} key={Symbol(index).toString()} />;
        })
      });
    });
  }

  shuffleCards(cards = []) {
    return cards
      .map(card => [Math.random(), card])
      .sort((card, nextCard) => card[0] - nextCard[0])
      .map(card => card[1]);
  }

  render() {
    return (
      <div className="deck">
        {this.state.cards}
      </div>
    );
  }
}

export default Deck;
