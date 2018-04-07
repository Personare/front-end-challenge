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
          return <Card {...cardProps} key={Symbol(index)} />;
        })
      });
    });
  }

  render() {
    return (
      <div className="deck">
        {this.state.cards.map(card => card)}
      </div>
    );
  }
}

export default Deck;
