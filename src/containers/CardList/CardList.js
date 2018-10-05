import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadCards, stopGame } from '../../actions';
import data from '../../assets/tarot.json';

import FullCard from '../../components/FullCard/FullCard';
import './CardList.sass';

export class CardList extends Component {
  componentWillMount() {
    this.props.stopGame();
    this.props.loadCards(data);
  }

  render() {
    return (
      <section className="CardList">
        {
          this.props.order.map(id => <FullCard
            key={id}
            name={this.props.cards[id].name}
            image={this.props.cards[id].image} />
          )
        }
      </section>
    );
  }
}

const mapStateToProps = ({ game }) => {
  return {
    cards: game.cards,
    order: game.order
  };
}

export default connect(mapStateToProps, { loadCards, stopGame })(CardList);
