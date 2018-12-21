import React, { Component } from 'react'
import PropTypes from 'prop-types'

import styles from './Cards.module.css'
import Spinner from '../Spinner'
import Card from '../../containers/Cards/Card'

class Cards extends Component {
  componentDidMount() {
    const { setIsLoading, getTarotCards } = this.props

    setIsLoading(true)
    getTarotCards()
  }

  renderCards() {
    const { tarotCards: { cards } } = this.props

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
  setIsLoading: PropTypes.func.isRequired,
  getTarotCards: PropTypes.func.isRequired,
}

export default Cards
