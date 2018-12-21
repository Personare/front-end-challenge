import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import styles from './Card.module.css'
import CardImage from './CardImage'

class Card extends Component {
  state = {
    selected: false,
  }

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
      this.setState({ selected: true })
    }
  }

  render() {
    const { isShuffle, item, currentCard } = this.props
    const { selected } = this.state

    return (
      <div
        onClick={this.handleCardClick}
        className={classNames(styles.card, {
          [styles.backcard]: isShuffle,
          [styles.selected]: selected,
          [styles.disabled]: !!currentCard.id,
        })}
      >
        <CardImage
          isShuffle={isShuffle}
          item={item}
          selected={selected}
        />
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
