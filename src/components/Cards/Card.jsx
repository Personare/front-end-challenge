import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import styles from './Card.module.css'
import CardImage from './CardImage'

class Card extends Component {
  handleClick = () => {
    const { setCurrentCard, item } = this.props

    setCurrentCard(item)
  }

  isSelected() {
    const { currentCard, item } = this.props

    return currentCard.index === item.index
  }

  getAttrs() {
    const { isShuffle, currentCard } = this.props
    const attrs = {
      className: classNames(styles.card, {
        [styles.backcard]: isShuffle,
        [styles.selected]: this.isSelected(),
        [styles.disabled]: !!currentCard.index,
      }),
    }

    if (isShuffle && !currentCard.index) {
      attrs.onClick = this.handleClick
    }

    return attrs
  }

  render() {
    const { isShuffle, item } = this.props

    return (
      <div {...this.getAttrs()}>
        <CardImage
          isShuffle={isShuffle}
          item={item}
          selected={this.isSelected()}
        />
      </div>
    )
  }
}

Card.propTypes = {
  isShuffle: PropTypes.bool.isRequired,
  setCurrentCard: PropTypes.func.isRequired,
  currentCard: PropTypes.object.isRequired,
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
  }).isRequired,
}

export default Card
