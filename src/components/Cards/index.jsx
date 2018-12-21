import React, { Component } from 'react'
import PropTypes from 'prop-types'

import styles from './Cards.module.css'
import Spinner from '../Spinner'
import Card from './Card'

class Cards extends Component {
  componentDidMount() {
    const { setIsLoading, getTarotCards } = this.props

    setIsLoading(true)
    getTarotCards()
  }

  render() {
    const { isLoading, tarotCards: { cards } } = this.props

    return (
      <div className={styles.cards}>
        {isLoading
          ? <Spinner />
          : cards.map(card => <Card key={card.key} item={card} />)}
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
