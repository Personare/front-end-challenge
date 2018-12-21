import React, { Component } from 'react'
import PropTypes from 'prop-types'

import styles from './Cards.module.css'
import Spinner from '../Spinner'
import Card from '../../containers/Cards/Card'
import ErrorMessage from './ErrorMessage'

class Cards extends Component {
  componentDidMount() {
    const { getTarotCards } = this.props

    getTarotCards()
  }

  renderCards() {
    const { tarotCards: { cards, error } } = this.props

    if (error) {
      return <ErrorMessage message={error.message} />
    }

    return cards.map(card => (
      <Card key={card.id} item={card} />
    ))
  }

  render() {
    const { isLoading } = this.props

    return (
      <div className={styles.cards}>
        {isLoading
          ? <Spinner />
          : this.renderCards()}
      </div>
    )
  }
}

Cards.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  getTarotCards: PropTypes.func.isRequired,
  tarotCards: PropTypes.shape({
    imagesUrl: PropTypes.string.isRequired,
    imageBackCard: PropTypes.string.isRequired,
    cards: PropTypes.arrayOf(PropTypes.object).isRequired,
  }).isRequired,
}

export default Cards
