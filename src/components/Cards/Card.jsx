import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import styles from './Card.module.css'
import CardName from './CardName'
import CardImage from '../../containers/Cards/CardImage'

class Card extends Component {
  handleCardClick = () => {
    const { isShuffle } = this.props

    if (isShuffle) {
      this.setValidCurrentCard()
    }
  }

  setValidCurrentCard() {
    const { currentCard, setCurrentCard, item } = this.props

    if (!currentCard.id) {
      setCurrentCard(item)
    }
  }

  render() {
    const { isShuffle, item } = this.props

    return (
      <div
        className={classNames(styles.card, {
          [styles.backcard]: isShuffle,
        })}
        onClick={this.handleCardClick}
      >
        <CardImage isShuffle={isShuffle} item={item} />
        <CardName isShuffle={isShuffle} text={item.name} />
      </div>
    )
  }
}

Card.propTypes = {
  isShuffle: PropTypes.bool.isRequired,
  setCurrentCard: PropTypes.func.isRequired,
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
  }).isRequired,
}

export default Card
